// ref to http://ccckmit.wikidot.com/js:nodewebhello
var ip = '172.22.12.228';
var port = 8081;

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.js!\n');
}).listen(port, ip);

/* Result:

$ node webhello.js

Then, use web browser to open url http://172.22.12.228:8081/
You will see:

Hello Node.js!
*/
