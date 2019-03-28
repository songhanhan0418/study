const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'kuazhu';

const client = new MongoClient(url,{ useNewUrlParser: true });

client.connect(function(err){
	console.log('Connected successfully to server');

	const db = client.db(dbName);

	const collection = db.collection('user');

//insert a document
/*
	collection.insertMany([{name:'Tom',age:18,major:'computer'}],(err,result)=>{
		if(err){
			console.log('insertMany err:::',err)
		}else{
			console.log(result);
		}
		client.close();
	})
*/
	//find all
	/*
	collection.find({}).toArray((err,docs)=>{
		if(err){
			console.log('find err',err)
		}else{
			console.log(docs)
		}
		client.close();
	})
	*/
	/*
	collection.find({age:18}).toArray((err,docs)=>{
		if(err){
			console.log('find err',err)
		}else{
			console.log(docs)
		}
		client.close();
	})
	*/
	//updateOne
	/*
	collection.updateOne({name:'Tom'},{$set:{age:22}},(err,result)=>{
		if(err){
			console.log('updateOne err',err)
		}else{
			console.log(result)
		}
		client.close();		
	})
	*/

	//delete
	collection.deleteOne({name:'Tom'},(err,result)=>{
		if(err){
			console.log('deleteOne err',err)
		}else{
			console.log(result)
		}
		client.close();			
	})
})
