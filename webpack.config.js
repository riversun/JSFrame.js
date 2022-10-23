const packageJson = require('./package.json');
const version = packageJson.version;
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {

    const conf = {
        mode: 'development',//production,development
        devServer: {
            port: 8080,
            open: {
                target: ["index.html"],
            },
            allowedHosts: "all",
            static:
                [
                    {
                        directory: path.join(__dirname, `public`),
                        publicPath: "/",
                        serveIndex: false,
                        watch: true,
                    },
                ],
        },
        entry: {
            jsframe: './src/index.js',
        },
        output: {
            path: path.join(__dirname, "lib"),
            filename: argv.mode === 'production' ? `[name].min.js` : `[name].js`,
            libraryTarget: 'umd'
        },
        optimization: {
            minimizer: [new TerserPlugin({
                //extractComments: true,
                //cache: true,
                //parallel: true,
                //sourceMap: true,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                }

            })],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"}
                    ]
                },
            ],
        },
        plugins: [
            new webpack.BannerPlugin(`[name] v${version} Copyright (c) 2007-2020 Tom Misawa`)
        ]
    };

    if (argv.mode !== 'production') {
        conf.devtool = 'inline-source-map';
    }

    return conf;
};

