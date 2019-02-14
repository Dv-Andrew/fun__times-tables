/**
 * Clean build directory
 */
const gulp = require('gulp');
const path = require('path');
const del = require('del');

const config = require('../config/config.json');
const mode = require('../config/mode');

const BUILD = mode.isDevelopment ? path.join(config.root.buildDir) : path.join(config.root.publicDir);

gulp.task('clean', function() {
  return del(BUILD);
});