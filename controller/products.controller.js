var db = require('../db');

module.exports.index = (req, res) => {
	var page = req.query.page || 1;
	var perPage = 8;
	var begin = (page-1)*perPage;
	var end = page*perPage;
	res.render('products/index', {
		products : db.get('products').value().slice(begin, end)
	});
}

module.exports.search = (req, res) => {
	var q = req.query.q;
	var matchedProducts = db.get('products').value().filter(function(product) {
		return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('products/index', {
		products: matchedProducts,
		value: q
	});
}