var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/js', express.static(__dirname + "/app/scr"));
app.use('/style', express.static(__dirname + "/app/style"));
app.use('/views', express.static(__dirname + "/app/views"));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen('3000', function(){
	console.log("I'm listening!");
});