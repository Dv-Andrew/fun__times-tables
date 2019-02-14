/**
 * Cоздание начальных директорий проекта
 */
const gulp = require('gulp');

const config = require('../config/config.json');

const SRC = config.root.devDir;

gulp.task('createDirectories', function() {
  return gulp.src("*.*", { read: false })
    .pipe(gulp.dest(`${SRC}${config.css.devDir}`))
    .pipe(gulp.dest(`${SRC}${config.sass.devDir}`))
    .pipe(gulp.dest(`${SRC}${config.sass.devDir}base`))
    .pipe(gulp.dest(`${SRC}${config.js.devDir}libs`))
    .pipe(gulp.dest(`${SRC}${config.js.devDir}modules`))
    .pipe(gulp.dest(`${SRC}${config.img.devDir}svg/sprite`))
    .pipe(gulp.dest(`${SRC}${config.fonts.devDir}`))
    .pipe(gulp.dest(`${SRC}${config.assets.devDir}`));
});