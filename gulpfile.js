var gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	path = require('path'),
	minifyCSS = require('gulp-minify-css'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	requirejsOptimize = require('gulp-requirejs-optimize'),
	amdOptimize = require("amd-optimize"),
	concat = require('gulp-concat');

/*
 * 编译各页面less文件到css文件
 * 将pagescript中每个页面的less文件生成css文件，
 * 放置到原less文件夹的平级文件夹内.即如下结构。
 * .
 * ├── css
 * │   └── main.css
 * └── less
 *     └── main.less
 */ 

//cssmin
gulp.task('cssmin',function(obj){
	return gulp.src(['**/pagescript/**/less/main.less']).pipe(less({
		globalVars: {
			static: '"' + path.join(__dirname, 'static') + '"'
		}
	}))
	.pipe(minifyCSS())
	.pipe(rename(function(path){
		path.dirname = path.dirname.replace('less','css');
		path.extname = '.css';
	}))
	.pipe(gulp.dest(''));
});


gulp.task('default', ['cssmin']);

