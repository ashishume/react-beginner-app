const express = require('express');
const router = express.Router();
const threadModel = require('../models/threads');
const mongoose = require('mongoose');
// const authCheck = require('../../middleware/check-auth');

//INSERT THE THREADS INTO DB
router.post('/', (req, res, next) => {

	const thread = new threadModel({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		description: req.body.description,
		date: new Date()
	});


	thread
		.save()
		.then((result) => {
			if (result)
				res.status(200).json({ message: 'Thread added successfully' });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				error: error,
				message: "Something went wrong"
			});
		});
});
//DISPLAY ALL THE THREADS
router.get('/', (req, res, next) => {
	threadModel
		.find()
		.select('_id title description date')
		.then((result) => {
			res.status(200).json({
				result: result
			});
		})
		.catch((error) => {
			res.status(500).json({
				error: error,
				message: "Something went wrong"
			});
		});
});
//DISPLAY ID THREAD
router.get('/:id', (req, res, next) => {
	var id = mongoose.Types.ObjectId(req.params.id);

	threadModel
		.find({ _id: id })
		.select('_id title description date')
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((error) => {
			res.status(500).json({
				error: error,
				message: "Something went wrong"
			});
		});
});

router.put('/', (req, res, next) => {
	var id = mongoose.Types.ObjectId(req.query.threadId);

	threadModel
		.findByIdAndUpdate(
			{ _id: id },
			{
				title: req.body.title,
				description: req.body.description,
				date: new Date()
			},
			{ new: true }
		)
		.then((response) => {
			if (response)
				res.status(200).json({ message: 'Thread updated successfully' });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				error: error,
				message: "Something went wrong"
			});
		});
});
router.delete('/', (req, res, next) => {
	var id = mongoose.Types.ObjectId(req.query.threadId);

	threadModel
		.remove(
			{ _id: id })
		.then((response) => {
			res.status(200).json({ message: 'Thread Deleted successfully' });
		})
		.catch((error) => {
			res.status(500).json({
				error: error,
				message: "Something went wrong"
			});
		});
});

module.exports = router;
