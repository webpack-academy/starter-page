const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-sourcemap',
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
			{test: /\.html/, loader: 'html-loader'},
			{test: /\.css/, loader: ExtractTextWebpackPlugin.extract({loader: 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'})}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin("styles.css"),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}