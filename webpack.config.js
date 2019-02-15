const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    { 
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            modules :  true,
                            localIdentName : '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                ]
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({template : './src/index.html'})
    ]  
}