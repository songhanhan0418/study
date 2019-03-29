const mongoose = require('mongoose');

//定义schema
const userSchema = new mongoose.Schema({
	name:{
		type:String,
		maxlength:[8,'不能超过8位'],
		minlength:[3,'不能少于3位'],
		default:'Mark'
	},
	age:{
		type:Number,
		max:[40,'最大40岁'],
		min:[18,'最小18岁'],
		required:[true,'必须输入']
	},
	major:{
		type:String,
		enum:['computer','sport','art','music']
	}
})
//生成模型
const UserModel = mongoose.model('user', userSchema);
//导出模型
module.exports = UserModel;