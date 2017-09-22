// api/puppies.js
const router = require('express').Router();
const axios = require('axios');

// matches GET requests to /api/places/
router.get('/:query', function(req, res, next) {
	const query = 'yoga';
	const location = '40.736467,-74.033760';
	const uri = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&radius=500&key=AIzaSyDb-AH1T38bh72l1XSpHJkn4cFm54Hwcm8`;
	console.log(uri);

	// USE THIS FOR NOW
	res.status(200).json([ { name: 'Pavana Yoga',
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
    location: { lat: 40.74413419999999, lng: -74.0290536 } },
  { name: 'Mimi Yoga Hoboken',
    address: '1200 Park Ave, Hoboken, NJ 07030, United States',
    location: { lat: 40.74877389999999, lng: -74.0281976 } },
  { name: 'Surya Yoga Academy',
    address: '341 Grove St, Jersey City, NJ 07302, United States',
    location: { lat: 40.7205238, lng: -74.0431689 } },
  { name: 'Hoboken Hatha Yoga',
    address: '1005 Washington St, Hoboken, NJ 07030, United States',
    location: { lat: 40.74881749999999, lng: -74.0270997 } },
  { name: 'Michelle Timek Yoga',
    address: '150 Bay St #909, Jersey City, NJ 07302, United States',
    location: { lat: 40.72102840000001, lng: -74.0401104 } },
  { name: 'Jivamukti Yoga Center Jersey City',
    address: '171 Newark Ave, Jersey City, NJ 07302, United States',
    location: { lat: 40.72088400000001, lng: -74.04524500000001 } },
  { name: 'Sattva Yoga Jersey City',
    address: '523 Palisade Ave, Jersey City, NJ 07307, United States',
    location: { lat: 40.74646919999999, lng: -74.04305029999999 } },
  { name: 'Yoga in the Heights',
    address: '317 Central Ave, Jersey City, NJ 07307, United States',
    location: { lat: 40.745957, lng: -74.049702 } },
  { name: 'Art of Living : Meditation and Yoga Studio',
    address: '189 Brunswick Street, 1st Floor, End of Hallway, Jersey City, NJ 07302, United States',
    location: { lat: 40.7264851, lng: -74.0508874 } },
  { name: 'SunMoon Hot Yoga',
    address: '413 Monmouth St, Jersey City, NJ 07302, United States',
    location: { lat: 40.7240008, lng: -74.0492347 } },
  { name: 'Asana Soul Practice',
    address: '411 Jefferson St, Hoboken, NJ 07030, United States',
    location: { lat: 40.74297780000001, lng: -74.03681569999999 } },
  { name: 'Integral Yoga Institute NYC',
    address: '227 W 13th St, New York, NY 10011, United States',
    location: { lat: 40.7385097, lng: -74.0014897 } },
  { name: 'Honor Yoga Hoboken',
    address: '720 Monroe St Unit E101, Hoboken, NJ 07030, United States',
    location: { lat: 40.7469456, lng: -74.0380055 } },
  { name: 'Kula Yoga Project',
    address: '28 Warren Street, 4th floor, New York, NY 10007, United States',
    location: { lat: 40.71438860000001, lng: -74.0079198 } },
  { name: 'Yoga Vida',
    address: '416 Washington Street, Retail Unit 2, Enter on Vestry Street, New York, NY 10013, United States',
    location: { lat: 40.722807, lng: -74.01073099999999 } },
  { name: 'Yoga to the People',
    address: '3, 115 W 27th St, New York, NY 10001, United States',
    location: { lat: 40.7459722, lng: -73.9917012 } } ]);

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