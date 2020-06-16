require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// Move JS Files to src/js
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Move Fonts to src/fonts
gulp.task('fonts', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('src/fonts'))
})

// Move Font Awesome CSS to src/css
gulp.task('fa', function () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('src/css'))
})

gulp.task('default', ['sass', 'js', 'serve', 'fa', 'fonts']);