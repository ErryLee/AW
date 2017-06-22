# webpack2和angular2搭建的项目
webpack2 &amp; angular2


- `npm install`，安装依赖包
- `npm run dev`，启动本地工程，在localhost:1699进行预览


搭建中遇到的问题：

- `The URL 'localhost:1699/sockjs-node' is invalid`，
该问题是由于webpack配置文件中的publicPath前边没有加http://，导致url解析失败

- `Uncaught reflect-metadata shim is required when using class decorators`，
这个问题是由于main.ts文件中没有引入 reflect-metadata和zone.js


