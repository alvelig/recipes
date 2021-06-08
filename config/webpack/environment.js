const Dotenv = require('dotenv-webpack');

// https://rossta.net/blog/how-to-customize-webpack-for-rails-apps.html#overriding-the-default-options-for-compiling-css-modules
const { environment } = require('@rails/webpacker');

environment.plugins.push({
  key: 'Dotenv',
  value: new Dotenv(),
});

const css = environment.loaders.get('css');

const sl = css.use.find((el) => el.loader === 'style-loader');
sl.loader = 'isomorphic-style-loader';

module.exports = environment;
