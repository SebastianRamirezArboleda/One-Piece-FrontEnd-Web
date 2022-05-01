// Dependencias
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycssv = require('gulp-minify-css');
    const { series } = require('gulp');

// Tarea 1 llamada minify-js
async function minifyjs(cb) {
    gulp.src(['js/*.js', '!js/pristine.js','!js/pristine.min.js','!js/jquery-2.2.3.min.js'])
        .pipe(concat('bodyRelated.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
        await Promise.resolve('done');
}
// gulp.task(minifyjs, function () {
//     gulp.src('js/*.js')
//         .pipe(concat('application.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('build/'))
// });

// Tarea 2 llamada minifycss
async function minifycss(cb) {
    gulp.src('css/*.css')
        .pipe(concat('application.css'))
        .pipe(minifycssv())
        .pipe(gulp.dest('build/'));
        await Promise.resolve('done');
}
// gulp.task(minifycss, function () {
//     gulp.src('css/*.css')
//         .pipe(concat('application.css'))
//         .pipe(minifycss())
//         .pipe(gulp.dest('build/'))
// });

exports.default = series(minifyjs , minifycss);
exports.minifyjs = minifyjs;
exports.minifycss = minifycss;
