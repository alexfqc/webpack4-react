const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, './src'),
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader:
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
          ],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };