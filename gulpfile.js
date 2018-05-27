var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');


gulp.task('sass', function () {  
    gulp.src('app/styles/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('dist/styles.css'));
});


gulp.task('browser-sync', function() {  
    browserSync.init(["dist/styles.css", "dist/scripts.js"], {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});