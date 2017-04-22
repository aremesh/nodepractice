var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Hello world!!!");
}).listen(8081);
console.log('server is running at 8081');
