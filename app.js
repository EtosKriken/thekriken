'use strict';

var http = require('http'),
    pug = require('pug');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Cotnent-Type': "text/html"});

    var html = pug.renderFile(__dirname + '/app/html/index.pug')

    response.end(html)    
});

server.listen(process.env.PORT || 8000);

console.log("Server running at http://127.0.0.1:8000/");

