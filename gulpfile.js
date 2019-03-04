var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')

    .pipe(sass())

    .pipe(gulp.dest(function (f) {

        return f.base;

    }))

});

gulp.task('default', function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
})