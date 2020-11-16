const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./js/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.bundle.js",
        publicPath: "dist"
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s(a|c)ss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|jpe?g|svg|png)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: "../",
                },
            },
        ]
    },
}