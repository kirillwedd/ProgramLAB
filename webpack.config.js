const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const{CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports= {
    mode:'development',

    entry:{
        main: './src/index.js',
        style: './src/styles/style.scss'
    },

     output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
     },
     plugins: [
        new HtmlWebpackPlugin({
            title:"",
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename:'main.css'})
     ],

     module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.(woff|woff2)$/i,
            type: 'asset/resource',
        }]
     }
}