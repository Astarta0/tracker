const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  // Определим точку входа и выходной каталог приложения
  entry: './src/client/client.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'client-bundle.js'
  },
  // Добавим loaders, которые будут ответственны за загрузку и объединение исходных файлов
  // Webpack выполняет loaders в обратном порядке: с последнего до первого, то есть справа налево
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  stage: 0,
                  browsers: 'last 2 years',
                  autoprefixer: true
                }),
                postcssNested()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
};
