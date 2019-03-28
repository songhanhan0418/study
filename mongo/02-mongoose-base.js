const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connect err:::',err);
	throw err;
});

db.once('open',()=>{
	console.log('successful connect!!!');
	const UserSchema = new mongoose.Schema({
  		name: String,
  		age:Number,
  		major:String,
	});
	const UserModel = mongoose.model('user', UserSchema);

	//插入数据
	const user = new UserModel({name:'Tom',age:18,major:'computer'});
	user.save((err,doc)=>{
		if(err){
			console.log('err>>>',err)
		}else{
			console.log(doc)
		}
	})
});