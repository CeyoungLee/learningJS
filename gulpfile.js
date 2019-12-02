const gulp = require ('gulp');
const babel = require('gulp-babel');
// 걸프 의존성

gulp.task('default',function () {
//걸프작업

    //node src
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    //browser src
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});