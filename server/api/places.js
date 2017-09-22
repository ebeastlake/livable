// api/puppies.js
const router = require('express').Router();
const axios = require('axios');

function flipLatLng(coordinate) {
	return [ coordinate[1], coordinate[0] ];
};

// matches GET requests to /api/places/
router.get('/:query', function(req, res, next) {
	const query = 'yoga';
	const location = '40.736467,-74.033760';
	const time_min = '15';
	const mode = 'walk';
	const uri = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&radius=500&key=AIzaSyDb-AH1T38bh72l1XSpHJkn4cFm54Hwcm8`;
	console.log(uri);


	const singlePlace = [{ name: 'Pavana Yoga',
    address: '251 1st St, Hoboken, NJ 07030, United States',
    location: { lat: 40.7377873, lng: -74.0339273 } }
	];
	// USE THIS FOR NOW
	const places = [ { name: 'Pavana Yoga',
    address: '251 1st St, Hoboken, NJ 07030, United States',
    location: { lat: 40.7377873, lng: -74.0339273 } },
  { name: 'Powerflow Yoga',
    address: '104 Hudson St, Hoboken, NJ 07030, United States',
    location: { lat: 40.7375444, lng: -74.03005209999999 } },
  { name: 'Surya Yoga Academy',
    address: '79 Hudson St, Hoboken, NJ 07030, United States',
    location: { lat: 40.7363021, lng: -74.0299888 } },
  { name: 'Devotion Yoga and Wellness',
    address: '12 Hudson Pl, Hoboken, NJ 07030, United States',
    location: { lat: 40.73602630000001, lng: -74.0284837 } },
  { name: 'Surya Yoga Academy',
    address: '618 Washington St, Hoboken, NJ 07030, United States',
    location: { lat: 40.74413419999999, lng: -74.0290536 } }];


    const getPolygons = places.map(place => {
    	console.log('place the first time is')
    	console.log(place)
    	const traveltimeURI = `https://mapfruition-traveltime.p.mashape.com/traveltimearea/${mode}/${place.location.lat},${place.location.lng}/${time_min}/true`;
    	const headers = { headers: { 
    		"X-Mashape-Key": "MGzRDjo6TmmshIsTFlTrl32FUHWNp13NdPIjsnYryq0X73cWk4", 
    		"Accept": "application/json" } };
    	return axios.get(traveltimeURI, headers)
    		.then(response => response.data)
    		.then(data => {
    			console.log('place is')
    			console.log(place)
    			console.log('coordinates are')
    			console.log(data.geometry.coordinates)
    			// fix: API returns [long, lat] instead of [lat, long]
    			const coordinates = data.geometry.coordinates[0].map(flipLatLng);
    			place.polygon = coordinates;
    			return place;
    		});
    });

    Promise.all(getPolygons)
    .then(places => {
    	console.log('response')
    	console.log(places)
    	res.status(200).json(places);
    })



	// CURRENTLY COMMENTED OUT TO LIMIT API REQUESTS
	// axios.get(uri)
	// 	.then(response => {
	// 		console.log(response.data.results)
	// 		console.log(typeof response.data.results)
	// 		let pointsOfInterest = [];
	// 		// pull properties of interest off API response
	// 		response.data.results.map(result => {
	// 			pointsOfInterest.push({
	// 				name: result.name, 
	// 				address: result.formatted_address,
	// 				location: result.geometry.location
	// 			})
	// 		});
	// 		console.log(pointsOfInterest);
	// 		res.status(200).json(pointsOfInterest);
	// 	});
});

module.exports = router;