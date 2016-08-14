var gulp = require('gulp');
var gulpTypescript = require('gulp-typescript');
var jsdoc = require("gulp-jsdoc3");

gulp.task('default', function () {

    return gulp.watch(['src/**/*.?(tsx|ts)', 'test/**/*.?(tsx|ts)'], function (event) {
        console.log(event.path);
        ts(event.path);
    });

    /**
  * ts解析 
  * @param path 连接
  */
    function ts(pathArr) {
        var tsconfig = require('./tsconfig.json').compilerOptions;
        return gulp
            .src(pathArr, {
                base: './'
            })
                       .pipe(gulpTypescript(tsconfig))
            .pipe(gulp.dest('./'));
    }
});

gulp.task('jsdoc', function (cb) {
    return gulp.src(['README.md', './src/**/*.js'], { read: false })
      .pipe(jsdoc());
})