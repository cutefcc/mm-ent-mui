
    import React from 'react';
import * as styles from '../global.less';
import {Empty} from 'mm-ent-ui';

    
    export const attributes = {};

    class SrtHcPQteCXBiNKpmxfExAnJfMSbFSBJ extends React.PureComponent {
  render() {
    return (
      <Empty
        image="https://maimai.cn/ent/images/empty_position.png"
        description="这里是空的文案" />
    );
  }
}

class TRnEsnANcNAWiXFQGWHJQXEyMfETYHjn extends React.PureComponent {
  render() {
    return <Empty description="这里是空的文案" />;
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>为空的提示，可以是列表为空的时候，也可以是整体为空的时候</p>
<h2>引用方式</h2>
<pre><code>import {"{"}Empty{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>代码演示</h2>
<h3>主标题</h3>
<blockquote>
<p>组件名称： 块级区域为空(设置图片)</p>
</blockquote>

  <div className="example">
    <div className="run"><SrtHcPQteCXBiNKpmxfExAnJfMSbFSBJ /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    return &lt;Empty image=&quot;https://maimai.cn/ent/images/empty_position.png&quot; description=&quot;这里是空的文案&quot; /&gt;{"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><blockquote>
<p>组件名称： 块级区域为空(没有图片)</p>
</blockquote>

  <div className="example">
    <div className="run"><TRnEsnANcNAWiXFQGWHJQXEyMfETYHjn /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    return &lt;Empty description=&quot;这里是空的文案&quot; /&gt;{"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>是否必填</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>image</td><td>为空的图片链接地址</td><td>否</td><td>string</td><td>空</td></tr>
<tr><td>description</td><td>描述文字</td><td>否</td><td>string</td><td>空</td></tr>
</tbody>
</table>

        </div>
      );
    };
  