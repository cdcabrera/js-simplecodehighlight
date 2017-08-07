let packageJson     = require('./package.json'),
    del             = require('del'),
    gulp            = require('gulp'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    insert          = require('gulp-insert'),
    jshint          = require('gulp-jshint'),
    karma           = require('karma').Server;


let settings = {
    version:        (packageJson.version || ''),
    date:           new Date().toDateString(),
    jsMatch:        ['./src/**/*.js', '!src/**/*spec.js', '!src/bower_components/**/*.js'],
    distJsFile:     'simplecodehighlight.min.js',
    dist:           './dist'
};


/**
 * Clean up the distribution directory
 */
gulp.task('clean', function () {

    return del([settings.dist+'/**/*']);
});


/**
 * JSHint JS files
 */
gulp.task('js-hint', function () {

    return gulp.src(settings.jsMatch)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


/**
 * Run unit test
 */
gulp.task('unit-test', ['js-hint'], function (done) {

    new karma({

        configFile: __dirname + '/karma.conf.js',
        singleRun: true

    }, done).start();
});


/**
 * Copy to dist
 */
gulp.task('copy', ['clean'], function () {

    let version = '//@version ' + settings.version +', '+ settings.date + '\n';

    gulp.src(settings.jsMatch)
        .pipe(insert.prepend(version))
        .pipe(gulp.dest(settings.dist));
});


/**
 * Concat and distribute files
 */
gulp.task('build', ['unit-test', 'clean', 'copy'], function() {

    let version = '//@version ' + settings.version +', '+ settings.date + '\n';

    return gulp.src(settings.jsMatch)
        .pipe(concat(settings.distJsFile))
        .pipe(uglify())
        .pipe(insert.prepend(version))
        .pipe(gulp.dest(settings.dist));
});
