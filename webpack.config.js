const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './public/assets/javascript/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css', 
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',  
            filename: 'index.html',
            inject: 'body', // Ensure only JS files are injected
            minify: {
                removeComments: true,
                
                
            }
        }),
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
