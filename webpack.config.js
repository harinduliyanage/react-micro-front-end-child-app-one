
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 3001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'kassandra',
            filename: 'remoteEntry.js',
            exposes: {
                './KassandraIndex': './src/index'
            }
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ]
}
