const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const V8LazyParseWebpackPlugin = require('v8-lazy-parse-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
	devtool: 'sourcemap',
	entry: {
		app: './src/index.js',
		vendor: './src/vendor.js'
	},
	output: {
		filename: '[name].chunk.js',
		path: path.resolve(__dirname, "./dist")
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
		new V8LazyParseWebpackPlugin(),
		// new webpack.optimize.UglifyJsPlugin({
		//     output: {
		//         comments: false
		//     },
		//     compress: {
		//         warnings: false,
		//         conditionals: true,
		//         unused: true,
		//         comparisons: true,
		//         sequences: true,
		//         dead_code: true,
		//         evaluate: true,
		//         if_return: true,
		//         join_vars: true,
		//         negate_iife: false
		//     }
		// }),
		new ExtractTextWebpackPlugin({filename: '[name].css', allChunks: true}),
		new webpack.ProgressPlugin(),
        new CompressionWebpackPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),		
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
	]
}