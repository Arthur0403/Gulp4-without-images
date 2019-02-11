'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    // scss: require('gulp-sass'),

    path: {
        tasks: require('./gulp/config/tasks.js') 
    }
};

$.path.tasks.forEach(function(taskPath){
   require(taskPath)();
})

// var src = {
//     scss: path.resolve($$dirname, 'src', 'static', 'scss', '**/*.+(scss|sass)'),
//     pug: path.resolve($$dirname, 'src', 'pug', 'pages', '**/*.pug'),
// } Варинат с использованием path

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('html', 'scss', 'scripts:lib', 'scripts'),
    $.gulp.parallel('watch', 'server'),
    'watch',
    'server'
    ));
