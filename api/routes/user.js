const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const authCheck = require('../../middleware/check-auth');

// var emailId;
// var id;
// function jwtToken() {
// 	const token = jwt.sign(
// 		{
// 			email: emailId,
// 			userId: id
// 		},
// 		'secret',
// 		{
// 			expiresIn: '24h'
// 		}
// 	);
// 	return token;
// }

//INSERT THE USER INTO DB
router.post('/signup', (req, res, next) => {
	// var tempToken = req.header.token;
	userModel.find({ email: req.body.email }).exec().then((user) => {
		if (user.length >= 1) {
			return res.status(409).json({
				message: 'Email exists'
			});
		} else {
			bcrypt.hash(req.body.password, 10, (err, hash) => {
				if (err) {
					return res.status(500).json({
						error: err
					});
				} else {
					emailId = req.body.email;
					// id = req.body._id;
					// var token = jwtToken();

					const user = new userModel({
						_id: new mongoose.Types.ObjectId(),
						email: req.body.email,
						password: hash,
						// token: token
					});
					user
						.save()
						.then((result) => {
							console.log(result);
							res
								.status(200)
								.json({
									message: 'Sign up Successful',
									checkAuth: 1,
									// token: token,
									userId: result._id,
									email: result.email
								})
								.catch((err) => {
									res.status(500).json({
										error: err
									});
								});
						})
						.catch((err) => {
							res.status(500).json({
								error: err
							});
						});
				}
			});
		}
	});
});

router.post('/signin', (req, res, next) => {
	userModel
		.find({ email: req.body.email })
		.exec()
		.then((user) => {
			if (user.length < 1) {
				return res.status(401).json({
					message: 'Authentication Failed'
				});
			}
			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				emailId = user[0].email;
				id = user[0]._id;

				if (err) {
					return res.status(401).json({
						message: 'Authentication Failed'
					});
				}
				if (result) {
					// var token = jwtToken();
					userModel
						.findOneAndUpdate(
							{ email: req.body.email },
							{
								// token: token
							},
							{ new: true }
						)
						.then((results) => {
							return res.status(200).json({
								message: 'Sign in Successful',
								checkAuth: 1,
								// token: token,
								userId: results._id,
								email: results.email
							});
						})
						.catch((err) => {
							res.status(500).json({
								error: err
							});
						});
				}
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err
			});
		});
});

router.get('/showAllUsers', (req, res, next) => {
	userModel
		.find({}, { password: 0 })
		.then((result) => {
			res.status(200).json({
				users: result
			});
		})
		.catch((error) => {
			res.status(500).json({
				error: error
			});
		});
});


module.exports = router;
