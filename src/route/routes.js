var express = require('express');

var router = express.Router();

const item = require('../model/item')

//retrieving data from database

// when getting that route response is as followed
router.get('/testing_get_route', (req, res,next)=> {
//	res.send('get route test');
	item.find(function(err,items){
		if(err) {
			res.json(err);
		} else {
			res.json(items);
		}
	});
});

router.post('/post_route', (req, res,next)=> {
	// do db stuff
});

router.put('/put_route', (req, res,next)=> {
	// do db stuff
});

router.delete('/delete_route', (req, res,next)=> {
	// do db stuff
});


module.exports = router;