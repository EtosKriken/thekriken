'use strict';

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

const express = require('express'),
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

    app.listen(server_port, server_ip_address, function () {
        console.log( "Listening on " + server_ip_address + ", server_port " + server_port  );    
    });