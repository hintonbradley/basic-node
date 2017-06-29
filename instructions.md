/////////////////////////////////////
//Initial Setup of Node and Express//
/////////////////////////////////////

Step 1: Install your dependencies (express, body-parser, bootstrap, jquery)
	$ npm install

Step 2: Run your node server in your terminal (in the directory that your server file is located).
	$ nodemon

Step 11: Update your middleware for paths for app and node_modules directories in the server.js file. Example:
app.use('/node_modules', express.static(__dirname + "/node_modules"));

Step 12: Add jquery and bootstrap links and js using a script tag to the bottom of your body and link in the head in your index.html file.
	<head>
		<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
	</head>
	...
		<script src="node_modules/jquery/dist/jquery.min.js"></script>
		<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	</body>