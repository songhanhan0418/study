const fs = require('fs');
//1.打开
const fd = fs.open('./01.txt','a',(err,fd)=>{

	if(err){
		console.log('err:::',err)
	}else{
		fs.write(fd,'hello00',(err)=>{
			if(err){
				console.log('write err::',err)
			}else{
				console.log('write success')
			}
			fs.close(fd,(err)=>{
				if(err){
					console.log('close err::')
				}else{
					console.log('close success')
				}
			})
		})
	
	}

});

/*fs.writeFile('01.txt','hello1',{flag:'a'},(err)=>{
	if(err){
		console.log('err')
	}else{
		console.log('success')
	}
})*/
console.log('do something')