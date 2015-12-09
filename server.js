var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
 next()
});

app.use(bodyParser.json());

app.listen(3000, function() {
	console.log('test server started');
});

var db = {
	users: []
};

app.post('/users', function(req, res){
	var users = req.body;
	db.users.push(users);
	console.log('success');
	res.json({msg: 'posted'});
	console.log(db);
});
