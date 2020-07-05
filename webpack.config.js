module.exports = {
  entry: ['babel-polyfill', './test.js'],

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [{ test: /\.[tj]sx$/, loader: 'babel' }]
  }
};
