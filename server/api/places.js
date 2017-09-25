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
	const googleURI = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&location=${location}&radius=500&key=AIzaSyBYc6eu1UxJXWJ5-qXnuskN7PEM0rZMOx0`;

	// query Google Places API for relevant results within defined area
	axios.get(googleURI)
		.then(response => {
			const placeDetails = response.data.results.map(result => {
				console.log('initial responses')
				console.log(result)
				console.log('result id')
				const placeid = result.place_id;
				console.log(placeid)
				return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=AIzaSyDK8Jpqx2Cvxr-xr8BgA4ON6o7YT-9kmYA`);
			});

			return Promise.all(placeDetails);
		})
		.then(response => {
			console.log('i should have details now!!!');
			console.log(typeof response)
			console.log(response)
			// pull properties of interest off API response
			const places = response.map(info => {
				console.log(info)
				const result = info.data.result;
				console.log('this result is')
				console.log(result)
				return {
					name: result.name, 
					address: result.formatted_address,
					location: result.geometry.location,
					phoneNo: result.formatted_phone_number,
					website: result.website
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
		    	console.log('mode is')
		    	console.log(mode)
		    	console.log('url')
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