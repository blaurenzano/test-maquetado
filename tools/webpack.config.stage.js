/**
 * STAGE webpack config.
 * Webpack configuration only used by STAGE environment.
 *
 * Compiles production code (minified) into a build directory, but keeps console logs.
 */

const webpack = require('webpack');

const webpackMergeSmart = require('webpack-merge').smart;
const commonConfig = require('./common.js');

module.exports = webpackMergeSmart(commonConfig, {
	// Chosen mode tells webpack to use its built-in optimizations accordingly.
	mode: 'production',

	plugins: [
		//  Define global variables
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('stage'),
			},
		}),
	],
});
