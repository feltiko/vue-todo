'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babelify = require('babelify')
const browserify = require('gulp-browserify');
const vueify = require('vueify');

gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('public/css'));
});

gulp.task('babel', () => {
    return gulp.src('src/js/main.js')
            .pipe(browserify({
                transform:  [babelify, vueify]
            }))
            .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['sass', 'babel'], () => {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch(['src/js/main.js', 'src/js/components/*/*.js', 'src/js/components/*.js'], ['babel']);
});