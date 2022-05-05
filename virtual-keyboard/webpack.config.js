const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new ESLintPlugin({
            baseConfig: {
                "env": {
                    "browser": true,
                    "es2021": true
                },
                "extends": "eslint:recommended",
                "parserOptions": {
                    "ecmaVersion": "latest",
                    "sourceType": "module"
                },
                "rules": {
                }
            },

        }),
        new HtmlWebpackPlugin({
            title: "Virtual keyboard",
            template: path.resolve(__dirname, './src/index.html'),
            filename: "index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    'sass-loader',
                ],
            },
        ],
    },
};