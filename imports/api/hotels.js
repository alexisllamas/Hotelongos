import { Mongo } from 'meteor/mongo';

let Hotels = new Mongo.Collection("hotels");

let Schemas = {};

Schemas.Reviews = new SimpleSchema({
	author: {
		type: String
	},
	authorUrl: {
		type: String
	},
	profilePhotoUrl: {
		type: String,
		optional: true
	},
	rating: {
		type: Number
	},
	text: {
		type: String
	}
});

Schemas.Cities = new SimpleSchema({
	name: {
		type: String
	},
	country: {
		type: String
	}
});

Schemas.Rooms = new SimpleSchema({
	name: {
		type: String
	},
	numRooms: {
		type: Number
	},
	numPeople: {
		type: Number
	},
	price: {
		type: Number,
    decimal: true 
	}
});

Schemas.Locations = new SimpleSchema({
	lat: {
		type: String
	},
	lng: {
		type: String
	}
});

Schemas.Hotels = new SimpleSchema({
	name: {
    type: String
  },
  placeId: {
  	type: String
  },
  rating: {
  	type: Number,
    decimal: true  	
  },
  address: {
  	type: String
  },
  location: {
  	type: Schemas.Locations
  },
  iconUrl: {
  	type: String
  },
  phoneNumber: {
  	type: String
  },
  reviews: {
  	type: [ Schemas.Reviews ],
  	optional: true
  },
  city: {
  	type: Schemas.Cities
  },
  photos: {
  	type: [ String ],
  	optional: true
  },
  services: {
  	type: [ String ]
  },
  rooms: {
  	type: [ Schemas.Rooms ]
  },
  stars: {
  	type: Number
  },
  website: {
  	type: String
  }
});

Hotels.attachSchema(Schemas.Hotels);

export default Hotels;