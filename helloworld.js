var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n - NodeJS installed and tested properly.");
});

server.listen(7000);
