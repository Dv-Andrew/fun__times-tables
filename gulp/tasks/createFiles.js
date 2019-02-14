/**
 * Cоздание начальных файлов проекта
 */
const gulp = require('gulp');

const file = require('gulp-file');
const merge = require('merge-stream');

const config = require('../config/config.json');

const SRC = config.root.devDir;

gulp.task('createFiles', function() {
  var html = file('index.html', '', { src: true })
    .pipe(gulp.dest(`${SRC}${config.html.devDir}`));

  var css = file('style.css', '', { src: true })
    .pipe(gulp.dest(`${SRC}${config.css.devDir}`));

  var sass = file('style.scss', '', { src: true })
    .pipe(gulp.dest(`${SRC}${config.sass.devDir}`));

  var sassBase = file('_base.scss', '', { src: true })
    .pipe(gulp.dest(`${SRC}${config.sass.devDir}base`));

  var sassVariables = file('_variables.scss', '', { src: true })
    .pipe(gulp.dest(`${SRC}${config.sass.devDir}base`));

  var js = file('main.ts', '', { src: true })
    .pipe(gulp.dest(`${SRC}${config.js.devDir}`));

  return merge(html, css, sass, sassBase, sassVariables, js);
});