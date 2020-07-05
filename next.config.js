const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-transpile-modules');
const disableIndicator = {
  devIndicators: {
    autoPrerender: false
  }
};

// module.exports = withPlugins([[withImages(), {}], [disableIndicator], [withTypescript()]);
module.exports = withPlugins(
  [withImages()],
  [withTypescript()],
  [disableIndicator],
  [withTM({ transpileModules: ['gsap'] })]
);
