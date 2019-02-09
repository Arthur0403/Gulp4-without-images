module.exports = function(){
    var scss = require('gulp-sass')
    _.gulp.task('scss', function(){
        return _.gulp.src('src/static/scss/**/*.scss')
        .pipe(_.gp.sourcemaps.init())
        .pipe(scss({
            'include css': true
        }))
        .pipe(_.gp.autoprefixer({
            browsers: ['last 10 versions'],
        }))
        .on("error", _.gp.notify.onError({
            message: "Error: <%= error.message %>",
            title: "scss"
        }))
        .pipe(_.gp.csso())
        .pipe(_.gp.sourcemaps.write())
        .pipe(_.gulp.dest('build'))
        .pipe(_.browserSync.reload({
            stream: true
        }));
    });
}