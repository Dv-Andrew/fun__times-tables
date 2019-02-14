/**
 * Build HTML
 */
const gulp = require('gulp');
const path = require('path');
const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');

const htmlmin = require('gulp-htmlmin');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');

const config = require('../config/config.json');
const mode = require('../config/mode');

const SRC = path.join(config.root.devDir, config.html.devDir, '**/*.html');
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.html.buildDir) : path.join(config.root.publicDir, config.html.buildDir);

gulp.task('html', function() {
  return gulp.src(SRC, {
      base: path.join(config.root.devDir, config.html.devDir),
      since: gulp.lastRun('html')
    })
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Error in HTML',
          message: err.message
        };
      })
    }))
    .pipe(newer(BUILD))
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulpIf(!mode.isDevelopment, htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest(BUILD));
});