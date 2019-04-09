const path = require('path');

module.exports = {
	//文件类型
  mode:'development',
  //文件入口
  entry: './src/index.js',
  //文件出口
  output: {
  	//导出文件的名称
    filename: 'bundle.js',

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
			}		   
	    ]
  	} 
};