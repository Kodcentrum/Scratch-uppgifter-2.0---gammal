var gulp = require('gulp');
var markdown = require('gulp-markdown');
var wrapper = require('gulp-wrapper');


gulp.task('html', function () {
    return gulp.src('*/README.md')
        .pipe(markdown())
        .pipe(wrapper({
           header: '<!doctype html>\n<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head><body>\n',
           footer: '</body></html>\n'
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['html']);
