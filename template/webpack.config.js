var path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '{{ name }}.js',
    library: '{{camelcase name}}',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  target: 'node',
  externals: [ nodeExternals() ]
}
