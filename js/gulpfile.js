var gulp = require('gulp'),
	less = require('gulp-less');


//先要编译
gulp.task('testless',function(){
	//根据gulpfile查找目录
	gulp.src('../css/zoom.less')
		//执行引进来的文件
		.pipe(less())
		//放的地方
		.pipe(gulp.dest('../css/'));
})

//监听上面的
gulp.task('lessWatch',function(){
	gulp.watch('../css/*.less',['testless'])
})

//先编译后监听
gulp.task('default',['testless','lessWatch'])
