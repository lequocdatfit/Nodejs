var express = require('express');
var pug = require('pug');
var app = express();
const port = 3000;
var usersRoutes = require('./routes/users.route');

app.use(express.static('public'))

app.listen(port, function() {
	console.log("listening on port", port);
});

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
	res.render('index', {});
});

app.use('/users', usersRoutes);