import { Meteor } from 'meteor/meteor';

import Hotels from '/imports/api/hotels';
import Countries from '/imports/api/countries';
import Cities from '/imports/api/cities';

const cities = require('../cities.json');
const key = Meteor.settings.private.google.apiKey;
const replaceSpaceWithPlus = (word) => word.split(' ').join('+');
let rooms = [
	{
		name: "Junior Suit",
		numPeople: 2 
	}, {
		name: "Master Suit",
		numPeople: 2
	},
	{
		name: "Estándar",
		numPeople: 1
	}, {
		name: "Habitación doble",
		numPeople: 4
	}
];

const random = (min,max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const getRooms = () => rooms.map((room, index) => {
		room.price = random(150, 3000);
		room.numRooms = random(10, 100);
		return room;
});

const seed = () => {
	if(Hotels.find({}).fetch().length <= 0) {
		cities.forEach((city, index) => {
			Cities.insert(city);
			getHotels(city);
		});
	} else {
		console.log(Hotels.find({}).fetch().length);
	}
}

const getHotels = (city) => {
	const cityFormatted = replaceSpaceWithPlus(city.name);
	const url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+"+cityFormatted+"&key=" + key;
	let hotelsArray = [];

  Meteor.http.call("GET", url,{}, function( error, response ) {
  	if ( error ) {
	    console.log( error );
	  } else {
			const hotels = response.data.results;
			hotels.forEach((item, index) => {
				let placeId = item.place_id;
				let url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId + "&language=es&key=" + key;
				console.log(url);
			  Meteor.http.call("GET", url, {}, ( error, response ) => {
					if ( error ) {
				    console.log( error );
				  } else {
				  	const hotelNeat = response.data.result;
						let photos = [];
						let reviews = [];
						const services = ["TV por cable", "Wifi", "Calefacción", "Aire acondicionado", "Lavandería", "Gimnasio", "Servicio a Cuarto", "Valet Parking", "Restaurante", "Cafetería"];
						let rooms = getRooms();

						if(hotelNeat.photos !== undefined) {
							hotelNeat.photos.forEach((item, index) => {
								photos.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=1024&photoreference='+item.photo_reference+'&key=' + key)
							});
						}

						hotelNeat.reviews.forEach((review, index) => {
							let profile_photo_url;
							if(review.profile_photo_url)
								profile_photo_url = review.profile_photo_url.substring(2);
							reviews.push({
								author: review.author_name,
								authorUrl: review.author_url,
								profilePhotoUrl: profile_photo_url,
								rating: review.rating,
								text: review.text
							});
						});


						let hotel = {
							name: hotelNeat.name,
						  placeId: hotelNeat.place_id,
						  rating: hotelNeat.rating,
						  address: hotelNeat.formatted_address,
						  location: {
						  	lat: hotelNeat.geometry.location.lat.toString(),
								lng: hotelNeat.geometry.location.lng.toString()
						  },
						  iconUrl: hotelNeat.icon,
						  phoneNumber: hotelNeat.international_phone_number,
						  reviews: reviews,
						  city: city,
						  photos: photos,
						  services: services,
						  stars: Math.round(hotelNeat.rating),
						  rooms: rooms,
						  website: hotelNeat.website
						}
						Hotels.insert(hotel);
						console.log(Hotels.find().count());
				  }
				});
			});
		}
  }); 
}


export default seed;