const http = require('http');
const querystring = require('querystring')
const url = require('url');

const server = http.createServer((req,res)=>{

	console.log('url:>>>',req.url,'method:>>',req.method)
	const myUrl = url.parse(req.url,true)
	console.log(myUrl)
	const obj = myUrl.query;
	console.log(obj)


	res.setHeader('Content-Type','text/plain;charset=utf-8')
	res.end('bye');	
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000')
})