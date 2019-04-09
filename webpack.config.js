const path = require('path');
const public = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: public,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: public,
    }
}