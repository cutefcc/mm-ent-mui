const { parse, print } = require("recast");

const code = [
    "function add(a, b) {",
    "  return a +",
    "    // Weird formatting, huh?",
    "    b;",
    "}"
  ].join("\n");
   
  // Parse the code using an interface similar to require("esprima").parse.
  const ast = parse(code);
  const codeStr = print(ast).code;
  console.log('ast', ast);
  console.log('codeStr', codeStr);