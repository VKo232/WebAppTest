const mongoose = require('mongoose');

const itemschema = mongoose.Schema({
	itemName: {
		type: String,
		required: true
		
	},
	itemProperty: {
		type: Number,
		required: true
	}
});

const item = module.exports = mongoose.model('item', itemschema);