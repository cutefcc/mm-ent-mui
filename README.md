- 启动方式

* `npm run client:dev` dev 打包 📦 前端代码 （开发环境用）
* `npm run client:prod` prod 打包 📦 前端代码（生产环境用）
* `npm run dev` 前台启动 node 应用

问题记录：

- BrowserRouter 在非 index 页面 （比如二级三级路由）刷新页面或者直接访问 404
  - 解决办法 1: 换成 HashRouter, 但是 hash 模式对 seo 不够友好，并且有一个 `#`(不好看), 不推荐这种方式
  - 解决办法 2: 设置 koa2-connect-history-api-fallback 白名单 配合 webpack 的配置文件 filename 和 publicPath
- html-webpack-plugin title 属性直接配置 不生效？？？
  - 解决办法： `<title><%= htmlWebpackPlugin.options.title %></title>`
- 开发环境引入 `ts-node-dev` 热启服务， 遇到 `Error: Cannot find module 'typescript'`
  - 解决办法：`sudo npm i typescript --save-dev && sudo npm i typescript -g`
- 前端路由跳转方式：
  - `this.props.history.push(route)`
  - `<Link to="/nav1/topics">react渲染长列表</Link>`
- node 端接收不到前端的 post 请求的 body 数据：
  - 设置 `headers: { 'Content-Type': 'application/json' }`
- react 使用箭头函数报错:
  - 参考：`https://babeljs.io/docs/en/babel-plugin-proposal-class-properties`
  - `npm install --save-dev @babel/plugin-proposal-class-properties`
  - 这里要注意 ⚠️：在.babelrc 中需要保障@babel/plugin-proposal-decorators 在 @babel/plugin-proposal-class-properties 前面，like this: 不然还会报错
  ```
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-proposal-class-properties",
  ```
  ```
  If you are using ["@babel/plugin-proposal-decorators", { "legacy": true }], make sure it comes *before* "@babel/plugin-proposal-class-properties" and enable loose mode, like so:
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ```
- webpack 配置 alias 别名：有益于项目引用组件时写更加简洁的路径
- `jsconfig.json` 了解一下？ 可以干嘛？ 和 `tsconfig.json` 是啥关系？
- vscode 编辑器不能跳转到组件对应的目录？
- @json-editor/json-editor 只是安装了，还没有实践
- redux envLists 的获取时机还存在问题（直接进入非主页和/alreadyEnv 页面会导致 redux envLists 为空）
- 看一下 eslint react/display-name 规则
- 自己写一个处理 markdown 文件的 loader，webpack打包时卡住不动
- 组件可以这样引用
  - import Avatar from "mm-ent-ui/Avatar";
  - import { MUIButton } from "mm-ent-ui";

- 命令介绍：
    // 启动服务，如果使用pm2的话：pm2 start npm --name 'mmEntMui' -- run dev --watch
    // 上面的watch是 变化后会立马生效（这里还是需要刷新浏览器的）
    "dev": "tsnd --respawn ./app.ts",
    // development 下打包前端代码
    "client:dev": "node ./scripts/client/dev.js",
    // production 下打包前端代码
    "client:prod": "node ./scripts/client/prod.js",
    // 监控md文件变化，转换为jsx
    "client:trans": "node ./scripts/client/trans.js",
    // webpack-dev-server
    "start": "webpack-dev-server --open",
- webpack-dev-server 解决了 在recruit-fe中启动文档热更新慢的问题（80s）-----> (2s)
- webpack-dev-server --open 刷新页面时（或者在hmr时）会遇到 Cannot GET /xx
  - 解决：historyApiFallback: true
- 目前本机开发命令：
  - （一个窗口监控md文件的变化）npm run client:monit
  - （另一个窗口运行webpack-dev-server---热更新）npm run start
- 线上发布命令：
  - npm run client:trans && npm run client:prod && pm2 start npm --name 'mmEntMui' -- run dev --watch
  - 第一次需要使用pm2启动，后面只需要npm run client:trans && npm run client:prod


- 使用rollup 打包组件遇到的问题：
  - [!] Error: Could not resolve './Button' from index.js
    - import Modal from './Modal' ---> import Modal from './Modal/index'