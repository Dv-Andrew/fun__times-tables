/**
 * Copy assets folder
 */
const gulp = require('gulp');
const path = require('path');

const config = require('../config/config.json');
const mode = require('../config/mode');

const SRC = path.join(config.root.devDir, config.assets.devDir, '**/', '*');
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.assets.buildDir) : path.join(config.root.publicDir, config.assets.buildDir);

gulp.task('assets', function() {
  return gulp.src(SRC, {
    base: path.join(config.root.devDir, config.assets.devDir)
  })
    .pipe(gulp.dest(BUILD));
});