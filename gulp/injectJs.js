'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('./configurationManager').get();
var destPathName = config.destPathName;
var gIf = require('gulp-if');


/**
 * Определение порядка загрузки js файлов
 */

gulp.task('injectJs', function () {

	var mainTemplates = [destPathName + '/js/templates.js'];
	mainTemplates.injectPlaceholder = 'templates';

	var dashboardJs = [destPathName + '/js/dashboard.js'];
	dashboardJs.injectPlaceholder = 'dashboard';
	var dashboardMockJs = [destPathName + '/js/dashboardmock.js'];
	dashboardMockJs.injectPlaceholder = 'dashboardmock';
	var loginJs = [destPathName + '/js/login.js'];
	loginJs.injectPlaceholder = 'login';

	return gulp.src(destPathName + '/*.html')
		.pipe(inject(gulp.src(mainTemplates), {
				read: false,
				ignorePath: 'dist',
				name: mainTemplates.injectPlaceholder,
				addRootSlash: false // relative path
			}
		))
		.pipe(inject(gulp.src(dashboardJs), {
				read: false,
				ignorePath: 'dist',
				name: dashboardJs.injectPlaceholder,
				addRootSlash: false // relative path
			}
		))
		.pipe(inject(gulp.src(dashboardMockJs), {
				read: false,
				ignorePath: 'dist',
				name: dashboardMockJs.injectPlaceholder,
				addRootSlash: false // relative path
			}
		))
		.pipe(inject(gulp.src(loginJs), {
				read: false,
				ignorePath: 'dist',
				name: loginJs.injectPlaceholder,
				addRootSlash: false // relative path
			}
		))
		.pipe(gulp.dest(destPathName));

});
