var rename = require("gulp-rename");
var gulp = require("gulp");
var uglifycss = require("gulp-uglifycss");
var concat = require("gulp-concat");
 

gulp.task("stickyheader",function (){
	// what files do i want to look for
	gulp.src("src/scss/stickyheader/stickyheader.scss")
	// rename the css file(s) i found
	.pipe(sass())
	// take the ive just renamed and minify them
	.pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(rename("theme.css"))
    .pipe(concat("all.css"))
	// where should i put the renamed file(s)
	.pipe(gulp.dest("./dist/"));


	
});
    

	// Default Task

gulp.task("stickyheader", function () {
		// body...
})