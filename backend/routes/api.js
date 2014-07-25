var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.use(function(req, res, next) {
	console.log('A request is happening' + ' ' + req.body.username + ' ' + req.body.password + ' ' + req.body.email);
	console.log(req.url);
	next();
});

router.get('/hello', function(req, res) {
	res.json({
		message: "Hei"
	});
});

/*	Insert new user to the database 	*/
router.post('/users', function(req, res) {
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;

	user.save(function(err) {
		if (err) {
			res.json({
				message: err.code
			});
		}
		res.json({
			message: 'New user created!'
		});
	});
});

/*	Authenticate user 	*/
router.post('/login', function(req, res) {
	User.findOne({
		username: req.body.username
	}, function(err, user) {
		if (err) throw err;

		if (user != null) {
			user.comparePasswords(req.body.password, function(err, result) {
				if (err) throw err;
				res.json({
					isValidUser: result
				});
			});
		} else {
			res.json({
				message: 'User not found'
			});
		}
	});	
});

module.exports = router;
