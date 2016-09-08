/////////////////////////////////////
//Initial Setup of Node and Express//
/////////////////////////////////////

Step 1: Create a new respository on github and complete set up instructions.

Step 2: Initialize git

Step 3: Create a file to act as your server to hold all your API calls, dependencies, etc. Example: 
$ touch server.js

Step 4: Initialize npm. Example: 
	$ npm init

Step 5: Using your terminal, install express, bootstrap, jquery and body-parser and save them to your package.json file.
	$ npm install --save express body-parser jquery

Step 6: Claim the above as dependencies in your app in your server.js file. Example:
var express = require('express');
var bodyParser = require('body-parser');


Step 7: Make your app an instance of express in your server.js file. Example:
var app = express();

Step 8: In your server.js file, run your node app so it listens on port XXXX. Example: 
app.listen('3000', function(){
	console.log("I'm listening!");
});

Step 9: Build get request for our root route in the server.js file and create an index.html file to render. Example: 
//GET REQUESTS
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

and...
$ cd <main_directory>
$ touch index.html

Step 10: Run your node server in your terminal (in the directory that your server file is located). Example:
$ nodemon

Step 11: Invoke your middleware for paths for app and node_modules directories in the server.js file. Example:
app.use('/node_modules', express.static(__dirname + "/node_modules"));

Step 12: Add jquery and bootstrap using a script tag in your index.html file. Example:
	<head>
		<script src="node_modules/jquery/dist/jquery.min.js"></script>
		<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
		<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	</head>