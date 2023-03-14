var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
    resolve: {
        mainFiles: ['index', 'Index'],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
    ],
    entry: path.resolve(__dirname, 'src/client') + '/index.js',
    context: __dirname,
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:5000/api',
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:5000',
        }),
    },
}
