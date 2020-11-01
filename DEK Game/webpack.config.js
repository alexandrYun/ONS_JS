const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    entry: './js/script.ts',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
  }
};