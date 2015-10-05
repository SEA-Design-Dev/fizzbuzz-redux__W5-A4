var gulp = require('gulp');
var browserify = require('gulp-browserify');
var FizzBuzz = require('sea-d44-fizz-buzz-bf-2');

// Basic usage 
gulp.task('run', function() {
	// Single entry point to browserify 
	gulp.src('node_modules/sea-d44-fizz-buzz-bf-2/index.js')
		.pipe(browserify({
		insertGlobals : true,
		debug : !gulp.env.production
	}))
		.pipe(gulp.dest('app/build/js'))
});