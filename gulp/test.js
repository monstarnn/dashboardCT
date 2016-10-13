var gulp = require('gulp');
// import codecov from 'gulp-codecov.io';
// import gulpProtractor from 'gulp-protractor';
var karma = require('karma');
var path = require('path');
// import path from 'path';

// import conf from './conf';
// import goCommand from './gocommand';
// import {browserSyncInstance} from './serve';


var config = require('./configurationManager').get();

var concat = require('gulp-concat');
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var path = require('path'),
    destPathName = config.destPathName,
    destDir = './' + destPathName,
    appDir = config.appDir;


/**
 * @param {boolean} singleRun
 * @param {function(?Error=)} doneFn
 */
function runFrontendUnitTests(singleRun, doneFn) {
    var basePath = path.join(__dirname, '../');
    var localConfig = {
        // configFile: conf.paths.karmaConf,
        configFile: basePath + 'karma.conf.js',
        singleRun: singleRun,
        autoWatch: !singleRun,
    };
    
    var server = new karma.Server(localConfig, function(failCount) {
        doneFn(failCount ? new Error(`Failed ${failCount} tests.`) : undefined);
    });
    server.start();
}

/**
 * @param {function(?Error=)} doneFn
 */
// function runProtractorTests(doneFn) {
//   gulp.src(path.join(conf.paths.integrationTest, '**/*.js'))
//       .pipe(gulpProtractor.protractor({
//         configFile: conf.paths.protractorConf,
//       }))
//       .on('error',
//           function(err) {
//             // Close browser sync server to prevent the process from hanging.
//             browserSyncInstance.exit();
//             // Kill backend server and cluster, if running.
//             gulp.start('kill-backend');
//             doneFn(err);
//           })
//       .on('end', function() {
//         // Close browser sync server to prevent the process from hanging.
//         browserSyncInstance.exit();
//         // Kill backend server and cluster, if running.
//         gulp.start('kill-backend');
//         doneFn();
//       });
// }

/**
 * Runs once all unit tests of the application.
 */
// gulp.task('test', ['frontend-test', 'backend-test']);

/**
 * Execute gulp-codecov task and uploads generated
 * coverage report to http://codecov.io. Should be used only
 * by external CI tools, as gulp-codecov plugin is already designed to work
 * with them. Does not work locally.
 */
// gulp.task('coverage-codecov-upload', function() {
//   gulp.src(path.join(conf.paths.coverageReport, 'lcov.info')).pipe(codecov());
// });

/**
 * Runs once all unit tests of the frontend application.
 */
gulp.task('test', ['test-build'], function(doneFn) {
    runFrontendUnitTests(true, doneFn);
});

gulp.task('test-debug', ['test-build'], function(doneFn) {
    runFrontendUnitTests(false, doneFn);
});

gulp.task('test-2', ['test-build-2'], function(doneFn) {
    runFrontendUnitTests(true, doneFn);
});

gulp.task('test-debug-2', ['test-build-2'], function(doneFn) {
    runFrontendUnitTests(false, doneFn);
});

/**
 * Runs once all unit tests of the backend application.
 */
// gulp.task('backend-test', ['package-backend'], function(doneFn) {
//   goCommand(conf.backend.testCommandArgs, doneFn);
// });

/**
 * Runs all unit tests of the application. Watches for changes in the source files to rerun
 * the tests.
 */
// gulp.task('test:watch', ['frontend-test:watch', 'backend-test:watch']);

/**
 * Runs frontend backend application tests. Watches for changes in the source files to rerun
 * the tests.
 */
// gulp.task('frontend-test:watch', function(doneFn) {
//   runFrontendUnitTests(false, doneFn);
// });

/**
 * Runs backend application tests. Watches for changes in the source files to rerun
 * the tests.
 */
// gulp.task('backend-test:watch', ['backend-test'], function() {
//   gulp.watch(
//       [
//         path.join(conf.paths.backendSrc, '**/*.go'),
//         path.join(conf.paths.backendTest, '**/*.go'),
//       ],
//       ['backend-test']);
// });

/**
 * Runs application integration tests. Uses development version of the application.
 */
// gulp.task('integration-test', ['serve:nowatch', 'webdriver-update'], runProtractorTests);

/**
 * Runs application integration tests. Uses production version of the application.
 */
// gulp.task('integration-test:prod', ['serve:prod', 'webdriver-update'], runProtractorTests);

/**
 * Runs application integration tests. Uses production version of the application.
 */
// gulp.task(
//     'local-cluster-integration-test:prod', ['serve:prod', 'local-up-cluster', 'webdriver-update'],
//     runProtractorTests);

/**
 * Downloads and updates webdriver. Required to keep it up to date.
 */
// gulp.task('webdriver-update', gulpProtractor.webdriver_update);


gulp.task('test-build', ['test-concat'], function() {
    var opts = {
        debug: false, //option.debug,
        entries: destPathName + '/test/test.js', //option.entryPoint,
        ignoreWatch: ['**/node_modules/**', '**/bower_components/**', '**/bower_modules/**'],
        poll: true
    };
    // bfy = browserify(opts);
    // gulp.src(appDir + '/test/**/*.js')
    //     .pipe(concat('test.js'))
    //     .pipe(gulp.dest(config.destPathName + '/test'));

    return browserify(opts)
        .transform(babelify, {
            presets: ['es2015']
        })
        .bundle()
        .on('error', error)
        .pipe(source('test.js'))
        .pipe(buffer())
        // .pipe(gIf(option.map, sourcemaps.init({loadMaps: true, addComment: false})))
        // .pipe(gIf(option.minify, uglify(option.bundleNameMin, {
        //   outSourceMap: option.map
        // })))
        // .pipe(gIf(option.map, sourcemaps.write('./')))
        // .pipe(sourcemaps.init({loadMaps: true, addComment: false}))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(destPathName + '/test'));

});

gulp.task('test-concat', function(){
    return gulp.src(appDir + '/test/**/*.js')
        .pipe(concat('test.js'))
        .pipe(gulp.dest(destPathName + '/test'));
});

gulp.task('test-clean', del.bind(null, [destDir + '/test'], {force: true}));

function error(a){
    gutil.log('ES6 TEST ERROR!'.red, a.toString().red);
}

var es = require('event-stream');
var glob = require('glob');
var rename = require('gulp-rename');

gulp.task('test-build-2', function (done) {
    // var files = [appDir + '/test/**/*.js'];
    glob(appDir + '/test/**/*.js', function(err, files) {
        if(err) done(err);
        var tasks = files.map(function (entry) {
            return browserify({entries: [entry]})
                .transform(babelify, {
                    presets: ['es2015']
                })
                .bundle()
                .on('error', error)
                .pipe(source(entry))
                .pipe(rename(function(path) {
                    // console.log(path);
                    // console.log(path.dirname);
                    path.dirname = path.dirname.replace('src/app/test/', 'src/app/test-build/');
                    // extname: '.bundle.js'
                }))
                .pipe(gulp.dest('.'));
                // .pipe(gulp.dest('./dist2'));
        });
        es.merge(tasks).on('end', done);
    });
    // gulp.src(appDir + '/test/**/*.js')
    //     .
});