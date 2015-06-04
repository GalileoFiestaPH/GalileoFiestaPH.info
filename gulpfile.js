'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpFilter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');

var config = {
	stylesPath: './assets/styles/',
	fontsPath: './assets/fonts/',
	imagesPath: './assets/images/',
	scriptsPath: './assets/scripts/',
	scssPath: './compile/styles/'
};

gulp.task('sass', function () {
  gulp.src(config.scssPath + '**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.stylesPath));
});

gulp.task('watch', function() {
  gulp.watch(config.scssPath + '**/*.{scss,sass}', ['sass'])
});

gulp.task('default', ['sass', 'watch']);