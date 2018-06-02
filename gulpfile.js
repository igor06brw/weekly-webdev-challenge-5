const gulp = require('gulp'),  
      sass = require('gulp-sass'),  
      browserSync = require('browser-sync').create(),
      imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});


gulp.task('sass', () => {
    return gulp.src("./app/styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./app/styles/*.scss", ['sass']).on('change', browserSync.reload);
});


gulp.task('sync', ['sass', 'serve'], () => {  
    gulp.watch("./app/styles/*.scss", ['sass']);
});


