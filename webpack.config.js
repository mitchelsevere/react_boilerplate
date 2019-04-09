import { join } from 'path';
const public = join(__dirname, 'public');

export const entry = './src/app.js';
export const output = {
    path: public,
    filename: 'bundle.js'
};
export const module = {
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
};
export const devtool = 'cheap-module-eval-source-map';
export const devServer = {
    contentBase: public,
};