const fs = require('fs');
//1.打开
const fd = fs.openSync('./01.txt','a');
//2.写入

fs.writeSync(fd,'buff');
//3.关闭
const data = fs.closeSync(fd)
console.log(data)