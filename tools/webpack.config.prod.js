/**
 * PRODUCTION webpack config.
 * Webpack configuration only used by production mode.
 */

const webpackMergeSmart = require('webpack-merge').smart;
const commonConfig = require('./common.js');
const prodConfig = require('./prod.js');

module.exports = webpackMergeSmart(commonConfig, prodConfig);
