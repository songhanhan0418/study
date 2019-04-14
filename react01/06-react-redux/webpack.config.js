const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	//文件类型
  mode:'development',
  //文件单入口写法一：
  entry: './src/index.js',
  //文件单入口写法二：
  entry: {
  	//chunk名称
  	index:'./src/index.js',
  },
  //文件出口
  output: {
  	//导出文件的名称
    filename: '[name].[hash].bundle.js',

    path: path.resolve(__dirname, 'dist')
  },
  module: {
	    rules: [
	    //处理css
			{
			    test: /\.css$/,
			    use: [
			      'style-loader',
			      'css-loader'
			    ]
			},
	    //处理图片 
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    		options: {
			      			limit: 1000
			    		}
			  		}
				]
			},
			//babel
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            presets: ['env', 'react'],
			            plugins: [
            				["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
        				]
			        }
			    }               
			}
	    ]
  	},
	plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        inject:true,//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true//给生成的js/css文件添加一个唯一的hash
	    }),
	    new CleanWebpackPlugin(),

	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:8080//服务运行的端口
  	}
};