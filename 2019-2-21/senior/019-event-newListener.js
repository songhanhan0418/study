const eventEmitter = require('events');

class MyEmitter extends eventEmitter{

}

const emitter = new MyEmitter();

emitter.on('newListener',(eventName,cb)=>{
	console.log('newListener....');
	console.log(eventName);
	console.log(cb);
	cb();
})

emitter.on('test1',()=>{
	console.log('test1:::....');
})
emitter.on('test2',()=>{
	console.log('test2:::....');
})