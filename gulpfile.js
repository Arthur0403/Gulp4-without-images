'use strict';

global._ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    // scss: require('gulp-sass'),

    path: {
        tasks: require('./gulp/config/tasks.js') 
    }
};

_.path.tasks.forEach(function(taskPath){
    require(taskPath)();
})

// var src = {
//     scss: path.resolve(__dirname, 'src', 'static', 'scss', '**/*.+(scss|sass)'),
//     pug: path.resolve(__dirname, 'src', 'pug', 'pages', '**/*.pug'),
// } Варинат с использованием path

_.gulp.task('default', _.gulp.series(
    _.gulp.parallel('pug', 'scss', 'scripts:lib', 'scripts'),
    _.gulp.parallel('watch', 'server'),
    'watch',
    'server'
    ));
