require('dotenv').config();

var express = require('express');
var pug = require('pug');
var app = express();
const port = 3000;
var usersRoutes = require('./routes/users.route');
var productsRoutes = require('./routes/products.route');
var loginRoutes = require('./routes/auth.route');
var cookieParser = require('cookie-parser');

var authMiddleware = require('./middleware/login.middleware');

app.use(express.static('public'))

app.listen(port, function() {
	console.log("listening on port", port);
});

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/', (req, res) => {
	res.render('index', {});
});

app.use('/login', loginRoutes);

app.use('/users', authMiddleware.authRequire, usersRoutes);

app.use('/products', authMiddleware.authRequire, productsRoutes);