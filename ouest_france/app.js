var express = require('express');
var app = express();
var url = require("url");
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.listen(8080);
