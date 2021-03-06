var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "src"
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./src/css/**/*.css', function () {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./src/temp/styles/styles.css')
        .pipe(browserSync.stream());
});