const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/user');
const threadsRoutes = require('./api/routes/threads');
const defaultRoutes = require('./api/routes/default');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	//CORS

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
	res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS,DELETE');
	res.header('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
	next();

});

//connection to the mongo DB
mongoose.connect('mongodb+srv://ashishume:deathking@webapi-07gnb.mongodb.net/DcoderDB?retryWrites=true', {
	useNewUrlParser: true
});

//routes to the respective models
app.use('/', defaultRoutes);
app.use('/user', userRoutes);
app.use('/threads', threadsRoutes);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		message: error.message
	});
});
module.exports = app;
