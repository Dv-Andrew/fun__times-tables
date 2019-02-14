/**
 * Вывод сообщения с действующим значением переменной NODE_ENV
 */
const gulp = require('gulp');

gulp.task('getCurrentEnvironment', function (callback) {
  let env = `
    --------------------------------------------
    Current environment: ${process.env.NODE_ENV}
    If you want to change environment use:
    "set NODE_ENV=production/development"
    --------------------------------------------
`;
  console.log(env);
  callback();
});