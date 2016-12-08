var gulp = require('gulp'),
	less = require('gulp-less');
//	browserSyn = require('');


//先要编译
gulp.task('lessc',function(){
	//根据gulpfile查找目录
	gulp.src('css/*.less')
		//执行引进来的文件
		.pipe(less())
		//放的地方
		.pipe(gulp.dest('css/'));
})

//先要编译
gulp.task('build', function(){
	//根据gulpfile查找目录
	gulp.src('js/*.js')
		//执行引进来的文件
		.pipe(ugliy())
		//放的地方
		.pipe(gulp.dest('js/'));
})

//监听上面的
gulp.task('watch',function(){
	gulp.watch('css/*.less',['lessc'])
//	gulp.watch('html/*.html', )
//	gulp.watch('js/*.js', ['build'])
})

//先编译后监听
gulp.task('default',['lessc','watch'])
