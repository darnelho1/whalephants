var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var db = {

};

//listener
app.listen(3000, function(req,res) {
	console.log('server started');
});