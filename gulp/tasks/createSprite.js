/**
 * Создание спрайта
 */
const gulp = require('gulp');
const path = require('path');

const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

const config = require('../config/config.json');

const SRC = path.join(config.root.devDir, config.img.devDir, '**/', config.img.sprite.devDir, config.img.sprite.extentions);
const BUILD = path.join(config.root.devDir, config.img.devDir);
const NAME = config.img.sprite.name;

gulp.task('createSprite', function(callback) {
  if (config.img.sprite.createSprite) {

    return gulp.src(SRC, {
      base: path.join(config.root.devDir, config.img.devDir)
    })
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename(NAME))
      .pipe(gulp.dest(BUILD));

  } else {
    console.log('Sprite creation disabled');
    callback();
  }
});