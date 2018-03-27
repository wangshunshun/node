var http = require('http'),//读取本地图片并显示在浏览器
fs = require('fs');

fs.readFile('./demo1/manman/2f475252eae7b746.jpg','binary',function(err,file) {
    if (err) {
      console.log(err);
      return;
    }else{
      http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.write(file,'binary');
        res.end();
        return;
      }).listen(8888);
    }
});