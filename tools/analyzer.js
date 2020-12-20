/**
 * Bundle Analyzer config.
 */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server', // In server mode analyzer will start HTTP server to show bundle report
            openAnalyzer: true, // Automatically open report in default browser.
            defaultSizes: 'parsed', // stat, parsed, gzip
        })
    ]
};
