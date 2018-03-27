var fs = require("fs");
var stat = fs.lstatSync("./manman");//判断是不是文件夹 
console.log(stat.isDirectory());