const packageJson = require('./package.json');
const version = packageJson.version;
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
    //mode: 'production',//production,development
    const conf = {
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
            filename: argv.mode === 'production' ? `[name]-${version}.min.js` : `[name]-${version}.js`,
            libraryTarget: 'umd'
        },
        optimization: {
            minimizer: [
                new UglifyJSPlugin({
                    uglifyOptions: {compress: {drop_console: true}},
                }),
            ],
        }
    };

    if (argv.mode === 'development') {
        conf.devtool = 'inline-source-map';
    }

    return conf;
};

