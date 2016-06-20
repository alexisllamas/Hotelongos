import Hotels from '/imports/api/hotels';
import Countries from '/imports/api/countries';
import Cities from '/imports/api/cities';

Meteor.publish('cities', () => Cities.find());

Meteor.publish('hotels', (city) => Hotels.find({"city.name": city}));

Meteor.publish('hotel', (id) => Hotels.find({"_id": id}));