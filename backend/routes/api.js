var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.use(function(req, res, next) {
	console.log('A request is happening' + ' ' + req.body.username + ' ' + req.body.password + ' ' + req.body.email);
	next();
});

router.get('/hello', function(req, res) {
	res.json({ message: "Hei" });
});

router.post('/users', function(req, res) {
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	
	user.save(function(err) {
		if (err) { 
			res.json({ message: err.code });
		}
		res.json({ message: 'New user created!' });
	});
});

module.exports = router;
