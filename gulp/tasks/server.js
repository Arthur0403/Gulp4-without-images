module.exports = function(){
    _.gulp.task('server', function(){
        _.browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
        
    });
}