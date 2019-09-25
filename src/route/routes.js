var express = require('express');

var router = express.Router();

const item = require('../model/item');
const user = require('../model/user');

//retrieving data from database

// when getting that route response is as followed
router.get('/items', (req, res,next)=> {
//	res.send('get route test');
	item.find(function(err,items){
		if(err) {
			res.json(err);
		} else {
			res.json(items);
		}
	});
});

router.get('/profile', (req, res,next)=> {
//	res.send('get route test');
	item.find(function(err,users){
		if(err) {
			res.json(err);
		} else {
			res.json(users);
		}
	});
});

router.post('/post_item', (req, res,next)=> {
	// do db stuff
	let newItem= new item({
		itemName:req.body.itemName,
		itemProperty: req.body.itemProperty
	});
	newItem.save((err,item)=> {
		if(err) {
			res.json(err);
		} else {
			console.log("Record inserted Successfully"); 
		}
	});
});

router.post('/post', (req, res,next)=> {
	// do db stuff
	let newUser= new user({
		username:req.body.username,
		password: req.body.password
	});
	newUser.save((err,user)=> {
		if(err) {
			res.json(err);
		} else {
			console.log("Record inserted Successfully"); 
		}
	});
	window.location.replace("localhost:3000/api/login");
});



router.put('/put_route', (req, res,next)=> {
	// do db stuff
});

router.delete('/delete_route', (req, res,next)=> {
	// do db stuff
});


module.exports = router;