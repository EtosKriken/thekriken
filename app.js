'use strict';

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

    app.listen(8000, function () {
        console.log("Server running at http://127.0.0.1:8000/");    
    });