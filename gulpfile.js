'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    prefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    rimraf = require('rimraf'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = {
    dist: {
        html:   'dist/',
        js:     'dist/js/'
    },
    src: {
        html:   'src/*.html',
        js:     'src/js/*.js'
    },
    watch: {
        html:   'src/**/*.html',
        js:     'src/js/**/*.js'
    },
    clean: './dist'
};

var config = {
    server: "./dist",
    // tunnel: "lirax",
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Angel"
};


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(gulp.dest(path.dist.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(sourcemaps.init()) 
        .pipe(minify())
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.dist.js))
        .pipe(reload({stream: true}));
});


gulp.task('build', [
    'js:build',
    'html:build',
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('webserver', function () {
    browserSync.init(config);
});


gulp.task('default', ['build', 'webserver', 'watch']);