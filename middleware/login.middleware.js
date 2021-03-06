var db = require('../db');

module.exports.authRequire = (req, res, next) => {
	if(!req.signedCookies.userId) {
		res.redirect('/login');
		return;
	}

	var user = db.get('users').find({id: req.signedCookies.userId}).value();
	if(!user) {
		res.redirect('/login');
		return;
	}

	res.locals.user = user;

	next();
}