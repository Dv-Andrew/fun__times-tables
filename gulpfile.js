'use strict'

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
});

/**
 * Creating a structure for a new project
 */
gulp.task('startNewProject',
  gulp.series(
    'createDirectories',
    'createFiles'
  )
);

/**
 * Building project
 */
gulp.task('build',
  gulp.series(
    'getCurrentEnvironment',
    'clean',
    'fonts',
    'assets',
    'createSprite',
    'img',
    'convertToWebp',
    gulp.parallel(
      'html',
      'css',
      'webpack')
  )
);

/**
 * Run development build
 */
gulp.task('dev',
  gulp.series(
    'build',
    gulp.parallel(
      'watch',
      'server'
    )
  )
);