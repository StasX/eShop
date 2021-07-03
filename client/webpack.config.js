const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: `${__dirname}/src/main.js`,
    output: {
        path: `${__dirname}/public`,
        filename: "js/main.js"
    },
    resolve: {
        extensions: [
            /* JavaScript files */
            ".js",
            /* HTML files */
            ".html",
            ".htm",
            /* Style files */
            ".css",
            ".scss",
            ".sass",
            /* Images */
            ".png",
            ".jpg",
            ".gif",
            ".bmp",
            /* Icons */
            ".ico",
            /* Fonts */
            ".eot",
            ".ttf",
            ".svg",
            ".woff",
            ".woff2",
        ]
    },
    module: {
        rules: [{
                test: /\.html?$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        sources: {
                            list: [{
                                tag: "img",
                                attribute: "src",
                                type: "src"
                            }]
                        }
                    }
                }]
            },
            {
                test: /\.css/,
                use: [{
                        loader: "style-loader"
                    }, {
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.scss/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: ["/node_modules", "/bower_components"],
                use: [{
                    loader: "babel-loader"
                }],
            },
            {
                test: /\.(jpe?g|png|gif|ico|bmp)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    },
                }, ],
            }, {
                test: /\.((woff2?)|(eot)|(ttf)|(svg))$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                }, ],
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        new miniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 600,
        poll: 1800,
        ignored: /node_modules/
    }
}
