module.exports = {
  entry: './src/js/app.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
	loader: 'babel-loader',
    	query: 
	  {
	    presets: ['es2015', 'react']
	  }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
