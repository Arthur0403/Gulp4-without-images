module.exports = function(){
    _.gulp.task('pug', function(){
        return _.gulp.src('src/pug/pages/**/*.pug')
        .pipe(_.gp.pug({
            pretty: true
        }))
        .pipe(_.gulp.dest('build'))
        .on('end', _.browserSync.reload);
    });
}