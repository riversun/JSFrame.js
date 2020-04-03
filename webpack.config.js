const packageJson = require('./package.json');
const version = packageJson.version;
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

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
            { loader: "style-loader" },
            { loader: "css-loader" }
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

