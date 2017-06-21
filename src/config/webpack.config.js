import path from "path"
import webpack from "webpack"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import CleanWebpackPlugin from "clean-webpack-plugin"
export default {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "css-loader",
                    "style-loader"
                ]
                  /*  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })*/
            }
        ],
        noParse: /jquery/
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    /*resolveLoader:{
     moduleExtensions:["-loader"]
     }*/
    plugins: [
        /* new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor'
         }),*/
        /* new UglifyJsPlugin({
         sourceMap: true,
         compress: {
         warnings: false
         }
         }),*/
        /*  new ExtractTextPlugin('[name].css'),
         new CleanWebpackPlugin(

         ['dist/!*',],　 //匹配删除的文件
         {
         root: __dirname,       　　　　　　　　　　//根目录
         verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
         dry:      false        　　　　　　　　　　//启用删除文件
         }
         )*/
    ]
}
