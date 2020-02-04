module.exports = {
  entry: ['babel-polyfill', './test.js'],

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [{ test: /\.jsx?$/, loader: 'babel' }]
  }
};
