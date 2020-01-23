const mongoose = require('mongoose');

const threadSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: { type: String, required: true },
	description: { type: String, required: true },
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('threads', threadSchema);
