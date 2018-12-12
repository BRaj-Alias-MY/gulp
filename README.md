# gulp


var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cssMin = require("gulp-css");

gulp.task("css", function() {
  gulp
    .src(["./css/album.css", "./css/bootstrap.min.css"])
    .pipe(concat("app.css"))
    .pipe(cssMin())
    .pipe(gulp.dest("./css"));
});

gulp.task("scripts", function() {
  gulp
    .src([
      "./js/bootstrap.min.js",
      "./js/holder.min.js",
      "./js/jquery-3.2.1.slim.min.js",
      "./js/popper.min.js"
    ])
    .pipe(concat("myjs.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
});

gulp.task(
  "default",
  gulp.series(["scripts", "css"], function(done) {
    // do more stuff
    done();
  })
);
