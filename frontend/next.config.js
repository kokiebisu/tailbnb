const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const disableIndicator = {
  devIndicators: {
    autoPrerender: false
  }
};
module.exports = withPlugins([[withImages(), {}], [disableIndicator]]);
