const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].chunk.js'
	},
	resolve: {
	  alias: {
	    vue: 'vue/dist/vue.js'
	  }
	},
	module: {
		rules: [
			{test: /\.js/, loader: 'babel-loader'},
			{test: /\.html/, loader: 'html-loader'}
		]
	},
	plugins: [
		new webpack.ProgressPlugin({

		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}