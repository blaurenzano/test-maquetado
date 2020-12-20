/**
 * This is a debug webpack.config that display an ANALYSIS of the PRODUCTION bundle.
 */

const webpackMergeSmart = require('webpack-merge').smart;
const commonConfig = require('./common.js');
const prodConfig = require('./prod.js');
const analyzerConfig = require('./analyzer.js');

module.exports = webpackMergeSmart(commonConfig, prodConfig, analyzerConfig);
