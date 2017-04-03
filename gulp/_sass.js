const gulp = require('gulp')
const sass = require('gulp-sass')
const path = './src/css/'

gulp.task('sass', () => {
  return gulp.src(path + 'scss/**/*.scss')
             .pipe(sass())
             .pipe(gulp.dest(path))
})
