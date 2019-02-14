/**
 * Build JavaScript
 */
const gulp = require('gulp');
const path = require('path');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulplog = require('gulplog');
const gulpIf = require('gulp-if');

const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const uglify = require('gulp-uglify');

const config = require('../config/config.json');
const webpackConfig = require('../config/webpackConfig');
const mode = require('../config/mode');

const SRC = path.join(config.root.devDir, config.js.devDir, '**/*.js');
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.js.buildDir) : path.join(config.root.publicDir, config.js.buildDir);

gulp.task('webpack', function(callback) {
  let firstBuildReady = false;

  function done(err, stats) {
    firstBuildReady = true;

    if (err) { // hard error, see https://webpack.github.io/docs/node.js-api.html#error-handling
      return; // emit('error', err) in webpack-stream
    }

    gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
      colors: true
    }));
  }

  return gulp.src(SRC, {
      base: path.join(config.root.devDir, config.js.devDir)
    })
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Error in JS (Webpack task)',
          message: err.message
        };
      })
    }))
    .pipe(named())
    .pipe(webpackStream(
      webpackConfig,
      null,
      done
    ))
    .pipe(gulpIf(!mode.isDevelopment, uglify()))
    .pipe(gulp.dest(BUILD))
    .on('data', function() {
      if (firstBuildReady) {
        callback();
      }
    });
});