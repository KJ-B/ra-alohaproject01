var rename = require("gulp-rename");
var gulp = require("gulp");
var uglifycss = require("gulp-uglifycss");
var concat = require("gulp-concat");
 
gulp
gulp.task("aloha",function (){
	// what files do i want to look for
	gulp.src("raacademyproject01/src/*.css")

	// rename the css file(s) i found
	.pipe(concat("all.css"))
	.pipe(rename("theme.css"))
	// take the ive just renamed and minify them
	.pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
	// where should i put the renamed file(s)
	.pipe(gulp.dest("./dist/"));


	
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/ccs/*.css', ['kitty']);
});

	// Default Task

gulp.task("kitty", function () {
		// body...
})