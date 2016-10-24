var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("js", function(){
    return browserify({
        entries: ["./script/main.js"]
    })
    .transform(babel.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("../static/script"))
    ;
});

gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('../static/css/'));
});



gulp.task('default',function() {
    gulp.watch('./script/**/*.js', ['js']);
    gulp.watch('./sass/**/*.scss',['styles']);
});
