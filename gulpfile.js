var gulp = require('gulp');
var markdown = require('gulp-markdown');
var wrapper = require('gulp-wrapper');


gulp.task('html', function () {
    return gulp.src('*/README.md')
        .pipe(markdown())
        .pipe(wrapper({
           header:
            '<!doctype html>\n'+
            '<html><head>'+
              '<meta charset="utf-8">'+
              '<meta name="viewport" content="width=device-width">'+
              '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>'+
              '<link rel="stylesheet" href="https://scratchblocks.github.io/scratchblocks2.css">'+
              '<script src="https://scratchblocks.github.io/scratchblocks2.js"></script>'+
              '<script src="https://scratchblocks.github.io/translations-all.js"></script>'+
              '<script>'+
                '$(document).ready(function(){'+
                  'scratchblocks2.reset_languages();'+
                  'var langDict = scratchblocks2._translations["sv"];'+
                  'if (langDict) { scratchblocks2.load_language(langDict); }'+
                  'scratchblocks2.parse("pre");'+
                '});'+
              '</script>'+
            '</head><body>\n',

           footer: '</body></html>\n'
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['html']);
