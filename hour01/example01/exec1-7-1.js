/* 
* @Author: webskyer
* @Date:   2015-08-13 19:06:42
* @Last Modified by:   webskyer
* @Last Modified time: 2015-08-13 19:25:44
*/

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/plain;charset=utf-8'});
    res.end('我在用Node.js 写程序！\n')
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');