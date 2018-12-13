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
===================================================
  # New Example
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cssMin = require("gulp-css");

gulp.task("css", function() {
  gulp
    .src([
    "./src/assets/bower_components/bootstrap/dist/css/*.css",
    "./src/assets/bower_components/font-awesome/css/*.css",
    "./src/assets/bower_components/bootstrap/dist/css/*.css",
    "./src/assets/bower_components/Ionicons/css/*.css",
    "./src/assets/dist/css/*.css",
    "./src/assets/dist/css/skins/*.css",
    "./src/assets/bower_components/*.css",
    "./src/assets/bower_components/jvectormap/*.css",
    "./src/assets/bower_components/bootstrap-datepicker/dist/css/*.css",
    "./src/assets/bower_components/bootstrap-daterangepicker/*.css",
    "./src/assets/plugins/bootstrap-wysihtml5/*.css"
        ])
    .pipe(concat("app.css"))
    .pipe(cssMin())
    .pipe(gulp.dest("./src/assets"));
});


gulp.task("scripts", function() {
  gulp
    .src([
    "./src/assets/bower_components/jquery/dist/jquery.min.js",
    "./src/assets/bower_components/jquery-ui/jquery-ui.min.js",
    "./src/assets/bower_components/bootstrap/dist/js/bootstrap.min.js",

    "./src/assets/bower_components/bootstrap-daterangepicker/daterangepicker.js",
    "./src/assets/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
    "./src/assets/dist/js/adminlte.min.js",
    "./src/assets/dist/js/pages/dashboard.js",
    "./src/assets/dist/js/demo.js",
    "./src/assets/dist/js/demo.js"
        ])
    .pipe(concat("app.js"))
    .pipe(cssMin())
    .pipe(gulp.dest("./src/assets"));
});




gulp.task(
  "default",
  gulp.series("scripts" , function(done) {
    // do more stuff
    done();
  })
);
