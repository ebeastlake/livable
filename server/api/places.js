// api/puppies.js
const router = require('express').Router();
const axios = require('axios');

// matches GET requests to /api/places/
router.get('/:query', function(req, res, next) {
	const query = req.body.query || 'yoga';
	console.log(req.body.query)
	const location = req.body.location || '40.736467,-74.033760';

	axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&radius='500'&key=AIzaSyDb-AH1T38bh72l1XSpHJkn4cFm54Hwcm8`)
		.then(response => {
			console.log(response);
		});
});

module.exports = router;