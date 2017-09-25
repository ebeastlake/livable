const router = require('express').Router();
const axios = require('axios');
const queryString = require('query-string');

// fully-functioning: matches GET requests to /api/places/

router.get('/:query', function(req, res, next) {
	const parsed = queryString.parse(req.params.query);
	const locQuery = parsed.location.replace(" ", "+");
	console.log('logQuery')
	console.log(locQuery)
	const googleURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${locQuery}&key=AIzaSyAQ7mCqks17Axyh9RRo4st_KyOruH0pPSo`;

	// query Google Places API for relevant results within defined area
	axios.get(googleURI)
		.then(res => res.data)
		.then(data => {
			const location = data.results[0].geometry.location;
			res.status(200).send(location);
		})
});

module.exports = router;