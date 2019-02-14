/**
 * Watcher
 */
const gulp = require('gulp');

const config = require('../config/config.json');

const SRC_HTML = `${config.root.devDir}${config.html.devDir}**/*.html`;
const SRC_SASS = `${config.root.devDir}**/${config.sass.devDir}**/*${config.sass.extentions}`;

gulp.task('watch',
  function() {
    // при сохранении любого sass/scss, html файла в рабочей директории выполняем соответствующий таск
    gulp.watch(SRC_HTML, gulp.series('html'));
    gulp.watch(SRC_SASS, gulp.series('css'));
  }
);