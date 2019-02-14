/**
 * Build CSS
 */
const gulp = require('gulp');
const path = require('path');
const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const config = require('../config/config.json');
const mode = require('../config/mode');

const SRC_CSS = path.join(config.root.devDir, config.css.devDir);
const SRC_SASS = `${path.join(config.root.devDir, config.sass.devDir, '**/')}${config.sass.mainFileName}${config.sass.extentions}`;
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.css.buildDir) : path.join(config.root.publicDir, config.css.buildDir);

gulp.task('css', function() {
  //в style.sass|scss записываем импорты, из них компилируется один style.css файл
  return gulp.src(SRC_SASS, {
      base: path.join(config.root.devDir, config.sass.devDir)
    })
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Error in Styles',
          message: err.message
        };
      })
    }))
    .pipe(newer(BUILD))
    .pipe(gulpIf(mode.isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([autoprefixer({})]))
    .pipe(gulp.dest(SRC_CSS))
    .pipe(gulpIf(!mode.isDevelopment, cleanCss()))
    .pipe(gulpIf(mode.isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest(BUILD));
});