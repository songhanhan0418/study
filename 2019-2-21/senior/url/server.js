const http = require('http');
const querystring = require('querystring');

const createServer = http.createServer((req,res)=>{
	console.log('url:',req.url,'method:',req.method);
	let body = '';
	
})