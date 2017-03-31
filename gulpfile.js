let gulp = require('gulp')
let webpack = require('webpack')
let browserSync = require('browser-sync')
browserSync.create()
let config = require('./webpack.config.js')


gulp.task('webpack', () => {
  webpack(config, () => {
    console.log('Webpack completed')
  })
})

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  })
})

gulp.task('watch', ['browserSync', 'webpack'], () => {
  gulp.watch('src/js/**/*.jsx', () => {
    gulp.start('webpack')
  })
  gulp.watch('src/css/**/*.css', () => {
    gulp.start('webpack')
  })

  gulp.watch('index.html', browserSync.reload)
  gulp.watch('./src/js/bundle.js', browserSync.reload)
})

