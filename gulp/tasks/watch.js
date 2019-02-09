module.exports = function(){
    _.gulp.task('watch', function () {
        _.gulp.watch('src/pug/**/*.pug', _.gulp.series('pug'));
        _.gulp.watch('src/static/scss/**/*.scss', _.gulp.series('scss'));
        _.gulp.watch('src/static/js/**/*.js', _.gulp.series('scripts'));
    });
}