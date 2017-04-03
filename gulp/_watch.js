let gulp = require('gulp')
let browserSync = require('browser-sync')
browserSync.create()

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
  gulp.watch('./src/index.html', () => {
    browserSync.reload()
  })
  gulp.watch('./src/js/bundle.js', () => {
    browserSync.reload()
  })
  gulp.watch('./src/js/**/*.jsx', () => {
    gulp.start('webpack')
  })
  gulp.watch('./src/css/scss/**/*.scss', () => {
    gulp.start('sass')
  })
  gulp.watch('./src/css/**/*.css', () => {
    browserSync.reload()
  })
})
