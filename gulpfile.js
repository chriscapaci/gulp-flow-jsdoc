var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var fs = require('fs');

const package = JSON.parse(fs.readFileSync('./package.json'));

gulp.task('lint', function () {
    return gulp.src('./lib/*.js')
        .pipe(eslint(package.eslintConfig))
        .pipe(eslint.format('stylish'))
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('./test/*.js')
        .pipe(mocha());
});
