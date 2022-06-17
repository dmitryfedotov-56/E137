const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    devServer: {
     static: {
      directory: path.join(__dirname, 'dist'),
	 },
   },
}

   