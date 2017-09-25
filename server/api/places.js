const router = require('express').Router();
const axios = require('axios');
const queryString = require('query-string');

function flipLatLng(coordinate) {
	return [ coordinate[1], coordinate[0] ];
};

// fully-functioning: matches GET requests to /api/places/

router.get('/:query', function(req, res, next) {
	const parsed = queryString.parse(req.params.query);
	console.log('query in api route')
	console.log(parsed)
	const text = parsed.text.replace(" ", "+");
	const time_min = parsed.time_min;
	const mode = parsed.mode;
	const location = `${parsed.lat},${parsed.lng}`;
	const googleURI = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&location=${location}&radius=500&key=AIzaSyDb-AH1T38bh72l1XSpHJkn4cFm54Hwcm8`;

	// query Google Places API for relevant results within defined area
	axios.get(googleURI)
		.then(response => {
			// pull properties of interest off API response
			const places = response.data.results.map(result => {
				console.log('this result is')
				console.log(result)
				return {
					name: result.name, 
					address: result.formatted_address,
					location: result.geometry.location,
				};
			});

			return places;
		})
		.then(places => {
			const headers = { 
				headers: { 
			    	"X-Mashape-Key": "MGzRDjo6TmmshIsTFlTrl32FUHWNp13NdPIjsnYryq0X73cWk4", 
			    	"Accept": "application/json" 
			    } 
			};

			console.log('found all the places!')
			console.log('but lets only look for three')
			const couplePlaces = places.slice(0, 3);
			console.log(couplePlaces)

			// CURRENTLY USING COUPLE PLACES TO TEST FOR TIMING OUT
			// determine the polygon for each of the defined places
			const getPolygons = couplePlaces.map(place => {
		    	const traveltimeURI = `https://mapfruition-traveltime.p.mashape.com/traveltimearea/${mode}/${place.location.lat},${place.location.lng}/${time_min}/true`;
		    	console.log(traveltimeURI)
		    	return axios.get(traveltimeURI, headers)
		    		.then(response => response.data)
		    		.then(data => {
		    			console.log('the data we got back is')
		    			console.log(data)
		    			// fix: API returns [long, lat] instead of [lat, long]
		    			const coordinates = data.geometry.coordinates[0].map(flipLatLng);
		    			place.polygon = coordinates;
		    			return place;
		    		});
	    	});

	    	Promise.all(getPolygons)
			    .then(places => {
			    	res.status(200).json(places);
			    })
		})
});

module.exports = router;