const path = require("path");

module.exports = {
  // Определим точку входа и выходной каталог приложения
  entry: "./src/client/client.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "client-bundle.js"
  },
  // Добавим loaders, которые будут ответственны за загрузку и объединение исходных файлов
  // Webpack выполняет loaders в обратном порядке: с последнего до первого, то есть справа налево
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};