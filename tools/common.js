/**
 * COMMON webpack config
 * Shared Webpack configuration for development, stage and production environments.
 */

const path = require('path');

// WARNING: When using the JetBrains WebStorm IDE, you may find that
// saving changed files does not trigger the watcher as you might expect.
// See: https://webpack.js.org/configuration/watch/#saving-in-webstorm
// NOTE: watch is triggered by gulp, not by webpack. See https://github.com/shama/webpack-stream

module.exports = {

    entry: {
        // Named entries
        //main: __dirname + '/app/js/main.js',
        main: path.resolve(__dirname, '../app/js/main.js'),
    },

    output: {
        filename: '[name].bundle.js',

        path: path.resolve(__dirname, '../build/js'),

        // webpack-dev-server takes a hint from publicPath, using it to determine where to serve the output files from.
        publicPath: '/build/'
    },

    externals: {},

    module: {
        rules: [
            {
            	test: /\.css$/,
            	use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },

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
                                // https://babeljs.io/docs/en/babel-preset-env#debug
                                debug: true,

                                // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
                                useBuiltIns: 'usage',

                                // https://babeljs.io/docs/en/babel-preset-env#corejs
                                corejs: 3,

                                /*
                                To get tree shaking working, we need the `modules: false` below.
                                https://2ality.com/2015/12/webpack-tree-shaking.html
                                2ality blog mentions that the issue is caused by under-the-hood usage
                                of `transform-es2015-modules-commonjs`. A comment on the above post shows
                                 that we can use `modules: false`.

                                https://webpack.js.org/guides/tree-shaking/#conclusion
                                https://babeljs.io/docs/en/babel-preset-env#modules
                                */
                                // Enable transformation of ES6 module syntax to another module type.
                                // Setting this to false will not transform modules.
                                modules: false,

                            }]
                        ],

                        plugins: []
                    }
                }
            }
        ]
    },

    plugins: [],


    optimization: {
        // Tells webpack to determine used exports for each module.
        // This supposedly is true by default but just to be sure.
        // @see https://webpack.js.org/configuration/optimization/#optimizationusedexports
        usedExports: true,

        splitChunks: {
            name: true,

            // When files paths are processed by webpack, they always contain / on Unix systems and \ on Windows.
            // That's why using [\\/] in {cacheGroup}.test fields is necessary to represent a path separator.
            // / or \ in {cacheGroup}.test will cause issues when used cross-platform.
            cacheGroups: {
                default: false,

                commons: {
                    test: /[\\/]node_modules[\\/]((three).*)[\\/]/,
                    name: 'three',

                    // sync + async chunks
                    chunks: 'all',

                    //filename: '[name].bundle.js',
                },

            }

        }


    },

    stats: {
        colors: true,

        maxModules: Infinity,
        exclude: false,
        excludeModules: false,

        entrypoints: true,

        chunks: true,
        chunksSort: 'name',
        chunkGroups: true,
        chunkModules: true,
    }

};
