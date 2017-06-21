import path from 'path'
import config from "./webpack.config"
import merge from "webpack-merge"
import webpack from "webpack"
import webpackDevServer from "webpack-dev-server"
import { format } from 'util'

let PORT = 1699;
let PUBLIC_PATH = "http://localhost:" + PORT + "/";
let webpackConifg = merge(config, {
    devtool: "source-map",
    //debug: true, webpack2 已切换到plugins中，据说在3中将取消
    entry: {
        main: [
            format("webpack-dev-server/client?%s", PUBLIC_PATH),
            "webpack/hot/dev-server",
            "./src/main.ts"
        ]
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        publicPath: PUBLIC_PATH,
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
const compiler = webpack(webpackConifg);
new webpackDevServer(compiler, {
    inline: true,
    hot: true,
    port: PORT,
    stats: {
        colors: true
    }
}).listen(PORT, 'localhost', (err) => {
    console.log(123)
})