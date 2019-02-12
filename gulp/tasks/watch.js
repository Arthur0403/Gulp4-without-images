module.exports = function(){
    $.gulp.task('watch', function () {
        $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('scss'));
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/*.html', $.gulp.series('html'));
    });
}