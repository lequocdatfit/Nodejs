var db = require('../db');
var md5 = require('md5');

module.exports.login = (req, res)=> {
	res.render('auth/login',{

	});
}

module.exports.postlogin = (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	var user = db.get('users').find({email: email}).value();
	if (!user) {
		res.render('auth/login', {
			errors : [
				'User does not exist.'
			],
		});
		return;
	}

	if (md5(parseInt(password)) !== user.password) {
		res.render('auth/login', {
			errors : [
				'Wrong password.'
			]
		});
		return;
	}

	res.cookie('userId', user.id, {signed : true});
	res.redirect('/users');
}