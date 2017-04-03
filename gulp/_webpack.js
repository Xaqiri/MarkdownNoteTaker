let gulp = require('gulp')
let webpack = require('webpack')
let config = require('../webpack.config.js')

gulp.task('webpack', () => {
  webpack(config, () => {
    console.log('Webpack completed')
  })
})
