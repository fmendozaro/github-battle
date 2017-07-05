var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './app/index.js',
		users: './app/users.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]_bundle.js'
	},
	module: {
		rules: [
			{test: /\.(js)$/, use: 'babel-loader'},
			{test: /\.css$/, use: ['style-loader', 'css-loader']}

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})]
}