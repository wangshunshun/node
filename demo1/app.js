var fs = require("fs");
var path=require("path");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/*var stat = fs.lstatSync("./manman");//判断是不是文件夹 
console.log(stat.isDirectory());*/

//如果未指定字符编码，则返回原始的 buffer。
// 如果 options 是一个字符串，则它指定了字符编码。
/*fs.readFile("./filelist.txt",'utf8',(err,data)=>{ 
	if(err) throw err;
	console.log(data)
})*/

//重命名文件(旧文件名称,新文件名称)
/*fs.rename("./filelist.txt","index.html",(err)=>{
	console.log(err)
})*/

//一个使用 Node.js 编写的 web服务器，响应返回 'Hello World'：
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
