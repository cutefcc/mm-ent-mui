const loaderUtils = require("loader-utils");
const fs = require("fs");
const path = require("path");
const except = require("except");
const { parse, print } = require("recast");
const babylon = require("babylon");
const camelize = require("camelize");
// front-matter 把md string转为一个对象（类似于ast）
/* {
    attributes: {imports: {}},
    body: ``,
    bodyBegin: 7,
    frontmatter: ``
}*/
const frontMatter = require("front-matter");
// 将markdown的string->html
const { Remarkable, utils } = require("remarkable");
const { escapeHtml } = utils;
// const md = new Remarkable('full');
const md = new Remarkable({
  html: true,
  xhtmlOut: true,
  breaks: true,
});

module.exports = function (content, item) {
  let loaderOptions = loaderUtils.getOptions(this);
  // const callback = this.async();
  // console.log('loaderOptions', loaderOptions); // webpack.config.js 里面该loader的optios属性的值
  // 这里把 acorn 弄进来想干嘛干嘛
  // console.log('content', content);
  const fm = frontMatter(content);
  // console.log('fm', fm);
  //   const html = md.render(fm.body);
  const attributes = fm.attributes;
  let components = [];
  let imports = [];

  md.renderer.rules.fence_custom.render = (tokens, idx, opts) => {
    // gets tags applied to fence blocks ```react html
    const codeTags = tokens[idx].params.split(/\s+/g);
    const lang = codeTags[codeTags.length - 1];
    const parseCodeBlockRes = parseCodeBlock(
      tokens[idx].content,
      lang,
      opts.langPrefix,
      opts.highlight
    );

    components = parseCodeBlockRes.component
      ? [...components, parseCodeBlockRes.component]
      : components;
    imports = [...imports, ...parseCodeBlockRes.imports];

    return parseCodeBlockRes.html;
  };

  const resultHtml = handleCombiHtml({
    attributes,
    html: md.render(fm.body),
    components,
    imports,
  });

  const url = path.resolve(
    __dirname,
    `../md_trans/${item.path.split("/")[item.path.split("/").length - 2]}.js`
  );
  fs.writeFileSync(url, resultHtml);
};

function handleCombiHtml(obj) {
  let doImports = `import React from 'react';\nimport * as styles from '../global.less';\n`;
  const imports = obj.attributes.imports || {};
  const components = obj.components || [];
  const jsx = obj.html.replace(/class=/g, "className=");

  const frontMatterAttributes = except(obj.attributes, "imports");
  for (const variable in imports) {
    // eslint-disable-next-line no-prototype-builtins
    if (imports.hasOwnProperty(variable)) {
      doImports += `import ${variable} from '${imports[variable]}';\n`;
    }
  }

  const ast = parse("");
  ast.program.body = components;
  const componentsHtml = print(ast).code;

  const ast2 = parse("");
  ast2.program.body = obj.imports;
  const importsHtml = print(ast2).code;

  const res = `
    ${doImports}
    ${importsHtml}
    export const attributes = ${JSON.stringify(
      camelize(frontMatterAttributes)
    )};

    ${componentsHtml}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          ${jsx}
        </div>
      );
    };
  `;
  return res;
}

/**
 * Parse a code block to have a source and a run code
 * @param   {String}   code       - Raw html code
 * @param   {String}   lang       - Language indicated in the code block
 * @param   {String}   langPrefix - Language prefix
 * @param   {Function} highlight  - Code highlight function
 * @returns {String}                Code block with souce and run code
 */
function parseCodeBlock(code, lang, langPrefix, highlight) {
  let codeBlock = escapeHtml(code);

  if (highlight) {
    codeBlock = highlight(code, lang);
  }

  const langClass = !lang ? "" : `${langPrefix}${escape(lang, true)}`;

  codeBlock = codeBlock
    .replace(/{/g, '{"{"{')
    .replace(/}/g, '{"}"}')
    .replace(/{"{"{/g, '{"{"}')
    .replace(/(\n)/g, '{"\\n"}')
    .replace(/class=/g, "className=");

  if (lang !== "html") {
    return {
      component: undefined,
      imports: [],
      html: `<pre><code>${codeBlock}</code></pre>`,
    };
    // return `<pre><code>${codeBlock}</code></pre>`
  }

  const astResult = parseAst(code);

  return {
    component: astResult.component,
    imports: astResult.imports,
    html: codeBlockTemplate(
      code,
      codeBlock,
      langClass,
      astResult.componentName
    ),
  };
  // return codeBlockTemplate(code, codeBlock, langClass, '')
}
function parseAst(code) {
  const config = {
    sourceType: "module",
    plugins: ["jsx", "flow", "classProperties"],
  };
  const ast = babylon.parse(code, config);
  const bodys = ast.program.body;

  const component = bodys.find((item) => item.type === "ClassDeclaration");
  const imports = bodys.filter((item) => item.type === "ImportDeclaration");
  const componentName = getRandomString(32);
  component.id.name = componentName;

  if (component) {
    component.id.name = componentName;
  }

  return {
    component,
    html: code,
    componentName: component ? componentName : "",
    imports,
  };
}
function getRandomString(len = 10) {
  const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz";
  const maxPos = chars.length;
  const pwd = [];
  const getRendomChar = () => chars.charAt(Math.floor(Math.random() * maxPos));
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      pwd.push(getRendomChar().toUpperCase());
    } else {
      pwd.push(getRendomChar());
    }
  }

  return pwd.join("");
}
/**
 * Wraps the code and jsx in an html component
 * for styling it later
 * @param   {string} exampleRun Code to be run in the styleguide
 * @param   {string} exampleSrc Source that will be shown as example
 * @param   {string} langClass  CSS class for the code block
 * @returns {string}            Code block with souce and run code
 */
function codeBlockTemplate(exampleRun, exampleSrc, langClass, componentName) {
  const code = componentName ? `<${componentName} />` : exampleRun;
  return `
  <div class="example">
    <div class="run" style={{border: '1px solid #D1D3DE', padding: '20px'}}>${code}</div>
    <div style={{display: 'flex', alignItems: 'center', color: '#f60', marginTop: '10px', marginBottom: '10px'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#f60'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div class="source" style={{border: '1px solid #D1D3DE', padding: '20px'}}>
      <pre${!langClass ? "" : ` class="${langClass}"`}><code${
    !langClass ? "" : ` class="${langClass}"`
  }>
        ${exampleSrc}
      </code></pre>
    </div>
  </div>`;
}
// 前置钩子，也就是会先执行pitch ，再执行normal
// webpack 会从左到右边执行每个loader的pitch（如果有），然后再从右到左执行loader中的普通方法
// 在上述过程中，如果任何一个pitch有返回值，loader链就被阻断，webpack会跳过后面所有的pitch和loader（实验一下）//https://segmentfault.com/a/1190000021657031
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  data.remainingRequest = remainingRequest;
};
