'use strict';

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var express = require('express'),
      app = express(),
      pug = require('pug');

var html = pug.renderFile(__dirname + '/app/html/index.pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.end(html)    
});

app.get('*', function(req, res){
    res.end(html) 
    });

app.listen(port, ip, function () {
    console.log( "Listening on " + ip + ", server_port " + port  );    
});

module.exports = app ;