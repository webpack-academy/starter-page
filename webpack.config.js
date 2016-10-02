const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'sourcemap',
	entry: {
		app: './src/index.js',
		vendor: './src/vendor.js'
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
			{test: /\.png|jpg/, loader: 'url-loader?limit=4000'},
			{test: /\.css/, loader: ExtractTextWebpackPlugin.extract({loader: 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'})}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'inline'],
			minChunks: Infinity
		}),
		new ExtractTextWebpackPlugin({filename: '[name].css', allChunks: true}),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
	]
}