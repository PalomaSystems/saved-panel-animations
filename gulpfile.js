var gulp = require("gulp");
var minify = require("gulp-minify");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");

gulp.task("pack-js", function () {
  return gulp
    .src("src/js/index.js", { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("pack-css", function () {
  return gulp
    .src("src/css/site.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("pack-js", "pack-css"));