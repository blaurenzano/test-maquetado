'use strict';

/**
 * gulpfile for gulp@4
 */

// ---------------------------------------------------------------------------------------------------------------------
// ::: DEPENDENCIES
// ---------------------------------------------------------------------------------------------------------------------


// General
const fs = require('fs');
const data = require('gulp-data');

// Gulp
const gulp = require('gulp');
const del = require('del');

const browserSyncInstance = require('browser-sync').create();
const ngrok = require('ngrok');
const QRCode = require('qrcode');

// Logging
const fancyLog = require('fancy-log');
const print = require('gulp-print').default;
const chalk = require('chalk');




// CSS post-processor
const postcss = require('gulp-postcss');

// A PostCSS plugin to minify CSS
const cssnano = require('cssnano');

// A PostCSS plugin version of autoprefixer, to automatically add css prefixes
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');

const inlinesource = require('gulp-inline-source');

// HTML template renderer
const nunjucksRender = require('gulp-nunjucks-render');

// HTML minifier
const htmlmin = require('gulp-htmlmin');

// Webpack requires
const webpack = require('webpack'); // We are using a different version of webpack...
const webpackStream = require('webpack-stream'); // ...than the one webpack-stream uses by default

// webpack configs for different environments
const webpackConfigDev = require('./tools/webpack.config.js');
const webpackConfigStage = require('./tools/webpack.config.stage.js');
const webpackConfigProd = require('./tools/webpack.config.prod.js');
const webpackConfigAnalyzer = require('./tools/webpack.config.bundleanalyzer.js');



// ---------------------------------------------------------------------------------------------------------------------
// ::: CONFIG
// ---------------------------------------------------------------------------------------------------------------------
const CONFIG = {
	srcPath: 'app/',
	assetsPath: 'app/assets/',

	// Path to the main javascript file
	entryPoint: ['./app/js/main.js'],

	// Filename of the initial html file
	mainPage: 'index.html',

	port: '8080',
	https: false,

	buildPath: 'build/',


	// Español
	es: {
		buildPath: 'build/es/',

		prod: {
			url: 'https://prod.com/es',
			gtag: 'UA-00000000-00',
		},

		stage: {
			url: 'https://stage.com/es',
			gtag: 'UA-00000000-00',
		},
	},
	
	// English
	en: {
		buildPath: 'build/en/',
		
		prod: {
			url: 'https://stage.com/en',
			gtag: 'UA-00000000-00',
		},
		
		stage: {
			url: 'https://stage.com/en',
			gtag: 'UA-00000000-00',
		},
	},
};




// todo: use process.env
let isProduction = false;

// By default BrowserSync will serve the Spanish version
let bsLang = 'es'; // 'en'

// What language are we currently rendering.
// Need this variable for _manageEnvironment()
let renderLang = 'es';

/**
 *
 * @param done
 */
function setProd(done) {
	isProduction = true;
	done();
}



/**
 *
 */
function setEnglish(done) {
	bsLang = 'en';
	done();
}


// ---------------------------------------------------------------------------------------------------------------------
// ::: CLEAN
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Deletes the output folder
 * @returns {Promise<string[]>}
 */
function clean() {
	return del([CONFIG.buildPath]);
}



// ---------------------------------------------------------------------------------------------------------------------
// ::: COPY
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Copy assets and fonts to the output folder
 * @returns {*}
 */
function copyAssets() {
	return gulp.src([
		CONFIG.assetsPath + '**/*',
		CONFIG.srcPath + 'data/**',
	], {base: CONFIG.srcPath})

	.pipe(gulp.dest(CONFIG.es.buildPath))
	.pipe(gulp.dest(CONFIG.en.buildPath));
}


/**
 * Copy favicons, manifest and other root files to the output folder
 * @returns {*}
 */
function copyRootFiles() {
	return gulp.src([
		CONFIG.srcPath + '*.png',
		CONFIG.srcPath + '*.ico',
		CONFIG.srcPath + '*.svg',
		CONFIG.srcPath + 'browserconfig.xml',
		CONFIG.srcPath + 'site.webmanifest',
		CONFIG.srcPath + '_headers'
	], {base: CONFIG.srcPath})

	.pipe(print())

	.pipe(gulp.dest(CONFIG.es.buildPath))
	.pipe(gulp.dest(CONFIG.en.buildPath));
}


/**
 * Copy task
 * @returns {*}
 */
const copyFiles = gulp.series(copyAssets, copyRootFiles);




//------------------------------------------------------------------------------------------------------------------
// ::: CSS
//------------------------------------------------------------------------------------------------------------------

/**
 *
 * @returns {*}
 */
function css() {
	const sassOptions = {
		outputStyle: 'expanded', //nested, expanded, compact, compressed,

		/*
		importer: importOnce,
		importOnce: {
			index: false,

			// Allows a CSS file to be imported directly into your Sass files. Simply don't include a file extension,
			// and if it's available as a CSS file it'll be imported!
			css: true
		}
		*/

	};


	// Autoprefix for stage and prod. Minification only for prod.
	const postcssPlugins = (isProduction) ? [autoprefixer(), cssnano()] : [autoprefixer()];

	return gulp.src([CONFIG.srcPath + 'sass/inline.scss', CONFIG.srcPath + 'sass/main.scss'])
		// Compile SASS, outputs regular CSS
		.pipe(sass(sassOptions)
			.on('error', sass.logError))

		// Apply plugins
		.pipe(postcss(postcssPlugins))

		.pipe(print())

		.on('error', onError)

		.pipe(gulp.dest(CONFIG.es.buildPath + 'css/'))
		.pipe(gulp.dest(CONFIG.en.buildPath + 'css/'));
}



/**
 *
 * @param err
 */
function onError(err) {
	console.error('gulpfile::err', err);

	// Recover from errors
	this.emit('end');
}


//------------------------------------------------------------------------------------------------------------------
// ::: HTML
//------------------------------------------------------------------------------------------------------------------


/**
 * Compile all templates to html files, pre-process them, and place them into the destination folder
 */
/*
function html() {
	// List of html files to process
	const files = [CONFIG.srcPath + '*.html'];

	return gulp.src(files)

	//.pipe(print())

		.pipe(gulp.dest(CONFIG.buildPath));
}
*/


/**
 * [DEV]
 * Compile all templates to html files, pre-process them, and place them into the destination folder
 */
/*
function htmlDev() {
	// List of html files to process
	const files = [CONFIG.srcPath + '*.html'];

	const postHtmlPlugins = [
		posthtmlExpressions({
			locals: {
				__METRIC_ID: 'UA-27849636-33',
				TIMESTAMP: Date.now()
			}
		})
	];

	return gulp.src(files)
		.pipe(print())
		//.pipe(tap((file) => path = file.path))
		.pipe(posthtml(postHtmlPlugins, {}))
		.pipe(gulp.dest(CONFIG.buildPath));
}
*/


/**
 * [PROD]
 * Compile all templates to html files, pre-process them, and place them into the destination folder
 */
/*
function htmlProd() {
	// List of html files to process
	const files = [CONFIG.srcPath + '*.html'];

	const postHtmlPlugins = [
		posthtmlExpressions({
			locals: {
				__METRIC_ID: 'UA-27849636-32',
				TIMESTAMP: Date.now()
			}
		})
	];

	return gulp.src(files)
		.pipe(print())
		//.pipe(tap((file) => path = file.path))
		.pipe(posthtml(postHtmlPlugins, {}))
		.pipe(gulp.dest(CONFIG.buildPath));
}
*/


/**
 * Nunjucks environment function
 * @param environment
 * @private
 */
function _manageEnvironment(environment) {
	const data = CONFIG[renderLang];

	fancyLog('isProduction', isProduction);

	// Sets some global properties based on the current environment: stage or prod
	// These properties will be available globally within the nunjucks templates.
	if(isProduction) {
		// PRODUCTION

		const siteUrl = data.prod.url;
		const gtag = data.prod.gtag;

		fancyLog('site:', siteUrl, gtag);

		// Base url
		environment.addGlobal('SITE_URL', siteUrl);

		// Global site tag (gtag.js)
		environment.addGlobal('GA_TRACKING_ID', gtag);

		// Canonical url for index.html
		////environment.addGlobal('canonicalUrl', '');

	} else {
		// STAGE

		const siteUrl = data.stage.url;
		const gtag = data.stage.gtag;

		fancyLog('site:', siteUrl, gtag);

		// Base url
		environment.addGlobal('SITE_URL', siteUrl);

		// Global site tag (gtag.js)
		environment.addGlobal('GA_TRACKING_ID', gtag);

	}


	const buildDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
	environment.addGlobal('BUILD_DATE', buildDate);
}


/**
 *
 * @param lang
 * @returns {*}
 * @private
 */
function _renderTemplateFor(lang) {
	renderLang = lang;

	return gulp.src([CONFIG.srcPath + `_pages/${lang}/*.njk`, CONFIG.srcPath + `_pages/${lang}/*.html`])
	.pipe(print())

	// The gulp-data plugin encapsulate a data source into a single data property attached to the file object.
	.pipe(data(function(file) {
		return JSON.parse(fs.readFileSync(CONFIG.srcPath + `_data/locale_${lang}.json`));
	}))

	// Renders templates with nunjucks
	.pipe(nunjucksRender({
		// These are options provided for nunjucks Environment. More info https://mozilla.github.io/nunjucks/api.html#configure
		envOptions: {
			// Turn off autoescape so we put html tags inside the data files
			autoescape: false,
		},

		// Hook for managing environment before compilation. Useful for adding custom filters, globals, etc.
		// We need this to pass ENV variables to the rendered html files.
		manageEnv: _manageEnvironment,

		// Relative path to templates (base)
		path: CONFIG.srcPath + '_templates/',
	}))

	// Inline specified stylesheets into the html
	.pipe(inlinesource({
		rootpath: CONFIG[lang].buildPath,
	}))

	// Minify HTML
	.pipe(htmlmin({
		removeComments: isProduction,
		collapseWhitespace: isProduction,

		// Always collapse to 1 space (never remove it entirely). Must be used in conjunction with collapseWhitespace=true
		conservativeCollapse: isProduction,
	}))

	.pipe(gulp.dest(CONFIG[lang].buildPath));
}


/**
 * Render templates files for Spanish
 * @returns {*}
 */
function renderSpanishTemplates() {
	return _renderTemplateFor('es');
}

/**
 * Render templates files for English
 * @returns {*}
 */
function renderEnglishTemplates() {
	return _renderTemplateFor('en');
}


/**
 * Render all templates
 */
const renderTemplates = gulp.parallel(renderSpanishTemplates, renderEnglishTemplates);



// ---------------------------------------------------------------------------------------------------------------------
// ::: JAVASCRIPT
// ---------------------------------------------------------------------------------------------------------------------

/**
 *
 * @returns {*}
 */
function webpackBundle(webpackConfig) {
	// Uncomment to debug and see the content of the webpack config
	//fancyLog(JSON.stringify(webpackConfig, undefined, 4));

	return gulp.src(CONFIG.entryPoint, { allowEmpty: true })
		.pipe(webpackStream(webpackConfig, webpack, function(err, stats) {
			if(err) {
				fancyLog(chalk.red('WEBPACK ' + err) );
			}

			fancyLog('-------------------------------');
			fancyLog(stats.toString(webpackConfig.stats));
			fancyLog('-------------------------------');
		}))

		//.pipe(print())

		.on('error', onError)

		.pipe(gulp.dest(CONFIG.es.buildPath + 'js/'))
		.pipe(gulp.dest(CONFIG.en.buildPath + 'js/'));
}


/**
 *
 * @returns {*}
 */
function webpackDev() {
	fancyLog('webpackDev');
	return webpackBundle(webpackConfigDev);
}


/**
 *
 * @returns {*}
 */
function webpackStage() {
	return webpackBundle(webpackConfigStage);
}


/**
 *
 * @returns {*}
 */
function webpackProd() {
	return webpackBundle(webpackConfigProd);
}


/**
 * Execute webpack bundle analyzer, and opens a server to display it.
 * This task is meant to be executed alone.
 *
 * @returns {*}
 */
function webpackBundleAnalyzer() {
	return webpackBundle(webpackConfigAnalyzer);
}



/**
 * Error reporting function
 * @param err
 */
function handleError(err) {
	console.error('gulfile::handleError', err);

	fancyLog(chalk.red(err.name)
		+ ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
		+ ': ' + 'Line ' + chalk.magenta(err.lineNumber)
		+ ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
		+ ': ' + chalk.blue(err.description));
}


// ---------------------------------------------------------------------------------------------------------------------
// ::: DEV SERVER
// ---------------------------------------------------------------------------------------------------------------------

/**
 * BrowserSync
 * @param done
 */
function browserSync(done) {
	browserSyncInstance.init({
		server: {
			baseDir: CONFIG[bsLang].buildPath
		},

		// Open the first browser window at URL + "/whatever"
		//startPath: "/es/index.html",

		// Decide which URL to open automatically when Browsersync starts.
		// Can be true, local, external, ui, ui-external, tunnel or false
		//open: 'local',

		port: CONFIG.port,
		https: CONFIG.https,

		// Un-comment to log connections
		//logConnections: true,

		// disable these inputs so they will not be mirrored in the others devices
		ghostMode: {
			clicks: false,
			scroll: false,
			location: false,
			forms: false,
		},

		// We are using ngrok to generate a tunnel to a temporal domain.
		// ngrok is an easy way to get https working. That way we can test camera access on mobile.
		callbacks: {
			 // This 'ready' callback can be used to access the Browsersync instance
			ready: function (err, bs) {
				//console.log('BrowserSync ready callback');

				// Point your tunnel at this address
				//console.log(bs.options.getIn(['urls', 'local']));
				//console.log(bs.options.get('urls'));
				//console.log(bs.options.get('port'));


				const connectPromise = ngrok.connect({
					//authtoken: 'xxxxxxx',
					port: bs.options.get('port'),
				});

				// 1) The callback parameter of connect() doesn't work!!!
				/*
				, function (err, url) {
					// https://xxxxx.ngrok.com -> 127.0.0.1:8080
					console.log(' -------------------------------------');
					fancyLog('\r', '      NGROK:', chalk.magenta(url));
					console.log(' -------------------------------------');
				});
				 */

				// 2) But I've found that handling the promise works and we can get the ngrok url!!
				connectPromise.then((url) => {
					// https://xxxxx.ngrok.com -> 127.0.0.1:8080
					console.log(' -------------------------------------');
					fancyLog('\r', '      NGROK:', chalk.magenta(url));
					fancyLog('\r', 'Open http://localhost:4040 for ngrok\'s web interface to inspect traffic.');
					console.log(' -------------------------------------');

					// Generate an ascii qr code of the ngrok url
					QRCode.toString(url, {
						//type:'terminal',
						type:'utf8',

					}, function (err, url) {
						if (err) throw err;
						console.log(url);
					})

				}).catch( (err) => {
					console.log(err);
				});
			}
		},
	});

	done();
}


/**
 * BrowserSync reload
 * @param done
 */
function browserSyncReload(done) {
	browserSyncInstance.reload();
	done();
}



// ---------------------------------------------------------------------------------------------------------------------
// ::: DEV WATCH
// ---------------------------------------------------------------------------------------------------------------------

/**
 *
 */
function watchFiles() {
	// Watch changes in html files
	/*
	gulp.watch([
		CONFIG.srcPath + '*.html'
	], htmlDev);
	*/

	// Watch changes in template files
	gulp.watch([
		CONFIG.srcPath + '_templates/**/*.njk',
		CONFIG.srcPath + '_pages/**/*.njk',
		CONFIG.srcPath + '_pages/**/*.html',
		CONFIG.srcPath + '_data/**/*.json',
	], renderTemplates);

	// Watch changes in css
	//gulp.watch(CONFIG.srcPath + 'css/**/*.css', css);

	// Watch changes in SASS. Then compile to css and inline the proper parts into the html
	gulp.watch(CONFIG.srcPath + 'sass/**/*.scss', gulp.series(css, renderTemplates));

	// Watch changes in js / json / glsl
	gulp.watch([
		CONFIG.srcPath + 'js/**/*.js',
		CONFIG.srcPath + 'js/**/*.json',
	], webpackDev); // gulp.series(webpackDev, browserSyncReload)

	// Watch changes in assets
	gulp.watch([
		CONFIG.assetsPath + '**/*'
	], copyAssets);
}





// ---------------------------------------------------------------------------------------------------------------------
// ::: BUILD TASKS
// ---------------------------------------------------------------------------------------------------------------------


/**
 * Creates a dev build, suited only for local development.
 * The bundle has un-minified/readable code.
 */
const dev = gulp.series(clean, css, gulp.parallel(renderTemplates, copyFiles, webpackDev), browserSync, watchFiles);

const dev2 = gulp.series(clean, css, gulp.parallel(renderTemplates, copyFiles, webpackDev));

// Same but it will start browser sync pointing at the english site
const devEng = gulp.series(clean, css, gulp.parallel(renderTemplates, copyFiles, webpackDev), setEnglish, browserSync, watchFiles);


/**
 * Same as 'dev' but it doesn't create a local server or watch.
 * Suitable for the STAGE environment.
 * Also uses another webpack config webpack.config.dev.ns. In this particular project,
 * the bundle needed to be mangled and minified, but with the console logs intact.
 */
const stage = gulp.series(clean, css, gulp.parallel(renderTemplates, copyFiles, webpackStage));


/**
 * Creates a production build. Suitable only for the PRODUCTION env.
 */
const build = gulp.series(setProd, clean, css, gulp.parallel(renderTemplates, copyFiles, webpackProd));



exports.clean = clean;
exports.copyFiles = copyFiles;
exports.css = css;
exports.renderTemplates = renderTemplates;
exports.browserSync = browserSync;

exports.webpackDev = webpackDev;
exports.webpackStage = webpackStage;
exports.webpackProd = webpackProd;
exports.webpackBundleAnalyzer = webpackBundleAnalyzer;

exports.dev = dev;
exports.devEng = devEng;
exports.stage = dev2;
exports.build = build;


// Default task
exports.default = dev;

