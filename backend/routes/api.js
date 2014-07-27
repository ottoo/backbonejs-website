var express = require('express');
var router = express.Router();
var User = require('../models/user');

/*	Called on every server request	*/
router.use(function(req, res, next) {
	console.log(req.session.valid);
	console.log(req.session.message);
	console.log('A request is happening' + ' ' + req.body.username + ' ' + req.body.password + ' ' + req.body.email);
	console.log(req.url);
	next();
});

/*	Restrict some routes for users that are not logged in.	*/
function restrict(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		req.session.error = 'Access denied';
		res.redirect('/');
	}
}

/*	Authenticate user 	*/
function auth(uname, pass, cb) {
	User.findOne({
		username: uname
	}, function(err, user) {
		if (err) throw err;

		if (user != null) {
			user.comparePasswords(pass, function(err, result) {
				if (err) throw err;
				cb(null, result);
			});
		} else {
			cb(null, false);
		}
	});
}

router.get('/hello', function(req, res) {
	req.session.message = "HEI!!!!";
	res.json({
		message: "Hei"
	});

});

/*	Get single user 	*/
router.route('/users/:userid').get(function(req, res) {
	User.findById(req.params.userid, function(err, user) {
		if (err) res.send(err);
		res.json(user);
	});
});

/*	Insert new user to the database 	*/
router.route('/users').post(function(req, res) {
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	user.address.street = req.body.street;
	user.address.state = req.body.state;
	user.address.zip = req.body.zip;
	user.address.country = req.body.country;

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
router.route('/login').post(function(req, res) {
	auth(req.body.username, req.body.password, function(err, user) {
		console.log("USER: " + user);
		if (user) {
			req.session.regenerate(function() {
				req.session.valid = true;
				res.json({ session: req.session.valid });
			});
		} else {
			res.json({ session: false });
		}
	});
});

/*	Logs the user out	*/
router.route('/logout').get(function(req, res) {
	req.session.destroy(function() {
		res.redirect('/');
	});
});

/* Returns user session status	*/
router.route('/session').get(function(req, res) {
	console.log("session route called");
	res.json({ session: req.session.valid });
});

module.exports = router;