/**
 * Конвертации изображений в webp
 */
const gulp = require('gulp');
const path = require('path');
const newer = require('gulp-newer');

const webp = require('gulp-webp');

const config = require('../config/config.json');
const mode = require('../config/mode');

const SRC = path.join(config.root.devDir, config.img.devDir, '**/', config.img.webp.devDir, config.img.webp.extentions);
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.img.buildDir, config.img.webp.buildDir) : path.join(config.root.publicDir, config.img.buildDir, config.img.webp.buildDir);

gulp.task('convertToWebp', function(callback) {
  if (config.img.webp.convertToWebp) {

    return gulp.src(SRC, {
        base: path.join(config.root.devDir, config.img.devDir)
      })
      .pipe(newer(BUILD))
      .pipe(webp({
        quality: 90
      }))
      .pipe(gulp.dest(BUILD));
      
  } else {
    console.log('convertation in .webp is disabled');
    callback();
  }
});