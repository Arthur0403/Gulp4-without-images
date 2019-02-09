module.exports = function(){
    _.gulp.task('scripts:lib', function(){
        return _.gulp.src([
        'node_modules/jquery/dist/jquery.min.js', 
        'node_modules/slick-carousel/slick/slick.min.js'])
        .pipe(_.gp.concat('libs.min.js'))
        .pipe(_.gulp.dest('build/static/js/'))
        .pipe(_.browserSync.reload({
            stream: true
        }));
    });

    _.gulp.task('scripts', function(){
        return _.gulp.src('src/static/js/main.js')
        .pipe(_.gulp.dest('build/static/js/'))
        .pipe(_.browserSync.reload({
            stream: true
        }));
    });
}