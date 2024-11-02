const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // Cleans up the dist folder before each build
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/index.html',
      }),
      // Enables hot module replacement in development
      !isProduction && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      hot: true,
      open: true,
    },
    mode: isProduction ? 'production' : 'development',
  };
};
