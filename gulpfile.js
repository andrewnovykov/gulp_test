var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var lr = require('tiny-lr');  
var server = lr();
 


gulp.task('default', function () {
  gulp.src('css/*.css')
    .pipe(minifyCSS())    
    .pipe(gulp.dest('app/css'));
});


gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});


 

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(refresh(server));
});

  

 gulp.task('lr-server', function() {  
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('watch', function ( ) {
	gulp.watch ('css/*.css',['default']),
	gulp.watch ('js/*.js',['compress']),
	gulp.watch('lr-server'),
	gulp.watch(['app/*.html'], ['html']);
})




