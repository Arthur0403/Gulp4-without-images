module.exports = function(){
    var scss = require('gulp-sass')
    $.gulp.task('scss', function(){
        return $.gulp.src('src/static/scss/**/*.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe(scss({
            'include css': true,
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe($.gp.autoprefixer({
            browsers: ['last 10 versions'],
        }))
        .on("error", $.gp.notify.onError({
            message: "Error: <%= error.message %>",
            title: "scss"
        }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('build'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });
}