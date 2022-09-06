const gulp = require('gulp')
const minify = require('gulp-minify')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))

gulp.task('pack-js', () => gulp
	.src('src/js/index.js', { allowEmpty: true })
	.pipe(minify({ noSource: true }))
	.pipe(rename('index.min.js'))
	.pipe(gulp.dest('dist')))

gulp.task('pack-css', () => gulp
	.src('src/css/site.scss')
	.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
	.pipe(cleanCSS({ compatibility: 'ie8' }))
	.pipe(rename('index.min.css'))
	.pipe(gulp.dest('dist')))

gulp.task('default', gulp.series('pack-js', 'pack-css'))
