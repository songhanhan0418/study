const http = require('http');

const server = http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/plain;charset=utf-8')
	res.write('hello,你好');
	res.end('bye');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000')
})