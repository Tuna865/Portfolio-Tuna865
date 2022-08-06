const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/components/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}