/**
 * PRODUCTION webpack config.
 * Webpack configuration only used by production mode.
 */
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    // webpack 4.x | babel-loader 8.x | babel 7.x
                    loader: 'babel-loader',
                    options: {
                        // https://babeljs.io/docs/en/presets#preset-options
                        // presets must be an array!!!!
                        presets: [
                            ['@babel/preset-env', {
                                debug: false,

                                // for uglifyjs... otherwise it throws error punc ...
                                //forceAllTransforms: true,
                            }]
                        ],

                    }
                }
            }
        ]
    },

    plugins: [
        //  Define global variables
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],

    resolve: {
        plugins: [
        ]
    },


    optimization: {

        minimize: true,

        // Allows you to override the default minimizer by providing a different one or more customized minifier instance.
        minimizer: [
            new TerserPlugin({
                // https://github.com/terser/terser#minify-options
                terserOptions: {
                    warnings: false,
                    module: true,

                    // https://github.com/terser/terser#mangle-options
                    mangle: {
                        module: true,

                        /*
                        // Note `mangle.properties` is `false` by default.
                         properties: {
                            keep_quoted: false,
                         }
                         */
                    },

                    // https://github.com/terser/terser#compress-options
                    compress: {
                        //  Pass true to discard calls to console.* functions
                        drop_console: true, // NO CONSOLE LOGS IN PRODUCTION!

                        module: true,

                        //dead_code: true,
                    },

                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    output: {
                        // Remove all comments
                        comments: false,
                    },
                },

                // Enable file caching. Default path to cache directory: node_modules/.cache/terser-webpack-plugin.
                cache: true,

                // Use multi-process parallel running to improve the build speed.
                parallel: true,

                // https://github.com/webpack-contrib/terser-webpack-plugin#extractcomments
                extractComments: {
                    condition: /^\**!|@preserve|@license|@cc_on/i,

                    filename: (file, fileData) => {
                        return `${file}.LICENSE.txt`;
                    },

                    banner: (licenseFile) => {
                        return `License information can be found in ${licenseFile}`;
                    }
                },

            }),
        ],
    },

};
