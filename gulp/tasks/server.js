/**
 * Создание локального сервера
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require('../config/config.json');

const SRC = config.root.buildDir;

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: SRC
    },
    notify: false,
    open: false
  });

  // следим за файлами в продакшн директории и при их изменении обновляем браузер
  browserSync.watch(`${SRC}**/*.*`).on('change', browserSync.reload);
});