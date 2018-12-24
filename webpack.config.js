const packageJson = require('./package.json');
const version = packageJson.version;
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {

    const conf = {
        mode: 'development',//production,development
        devServer: {
            open: true,
            openPage: "index.html",
            contentBase: path.join(__dirname, '/public'),
            watchContentBase: true,
            disableHostCheck: true,
            port: 8080,
        },
        entry: {
            jsframe: './src/jsframe.js',
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: argv.mode === 'production' ? `[name]-${version}.min.js` : `[name].js`,
            libraryTarget: 'umd'
        },
        optimization: {
            minimizer: [
                new UglifyJSPlugin({
                    uglifyOptions: {compress: {drop_console: true}},
                }),
            ],
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
    };

    if (argv.mode !== 'production') {
        conf.devtool = 'inline-source-map';
    }

    return conf;
};

