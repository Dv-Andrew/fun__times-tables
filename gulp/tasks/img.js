/**
 * Minification images
 */
const gulp = require('gulp');
const path = require('path');
const newer = require('gulp-newer');

const imagemin = require('gulp-imagemin');

const config = require('../config/config.json');
const mode = require('../config/mode');

const SRC = path.join(config.root.devDir, config.img.devDir, '**/', config.img.extentions);
const SRC_EXCLUDE = config.img.sprite.createSprite ? `!${path.join(config.root.devDir, config.img.devDir, '**/',config.img.sprite.devDir, '**/*')}` : ' ';
const BUILD = mode.isDevelopment ? path.join(config.root.buildDir, config.img.buildDir) : path.join(config.root.publicDir, config.img.buildDir);

gulp.task('img', function() {
  return gulp.src([ SRC, SRC_EXCLUDE ], {
      base: path.join(config.root.devDir, config.img.devDir),
      since: gulp.lastRun('img')
    })
    .pipe(newer(BUILD))
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest(BUILD));
});