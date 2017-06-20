import path from "path"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
export default {
    entry: {
        main: "./src/main.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                user: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ],
        noParse: /lodash|jquery/
    },
    /*resolveLoader:{
     moduleExtensions:["-loader"]
     }*/
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true
            }
        }),
        new ExtractTextPlugin('[name].css')
    ]
}