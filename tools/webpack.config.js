/**
 * DEVELOPMENT webpack config
 * Webpack configuration only used by development mode.
 */

const webpack = require('webpack');

const webpackMergeSmart = require('webpack-merge').smart;
const commonConfig = require('./common.js');


//module.exports = ({ env }) => {
module.exports = webpackMergeSmart(commonConfig, {
	// Chosen mode tells webpack to use its built-in optimizations accordingly.
	mode: 'development',

	plugins: [
		//  Define global variables
		new webpack.DefinePlugin({
			'process.env': {
				// This takes the NODE_ENV and passes it to webpack
				//'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
				'NODE_ENV': JSON.stringify('development'),
			},
		}),
	],
});
