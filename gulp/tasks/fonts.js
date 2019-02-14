/**
 * Copy fonts
 */
const gulp = require('gulp');
const path = require('path');

const config = require('../config/config.json');
const mode = require('../config/mode');

const SRC = path.join(config.root.devDir, config.fonts.devDir, '**/', config.fonts.extentions);
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.fonts.buildDir) : path.join(config.root.publicDir, config.fonts.buildDir);

gulp.task('fonts', function() {
  return gulp.src(SRC, {
    base: path.join(config.root.devDir, config.fonts.devDir)
  })
    .pipe(gulp.dest(BUILD));
});