const http = require('http');
const querystring = require('querystring')
const url = require('url');

const server = http.createServer((req,res)=>{

	console.log('url:>>>',req.url,'method:>>',req.method);
	let body ='';
	req.on('data',(chunk)=>{
		body += chunk;
	});
	req.on('end',()=>{
		//console.log(body)
		let obj = querystring.parse(body);
		console.log(obj)
	})


	res.setHeader('Content-Type','text/plain;charset=utf-8')
	res.end('bye');	
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000')
})