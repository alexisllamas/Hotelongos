import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Hotels from '/imports/api/hotels'

Meteor.methods({
  'hotels.insert'(hotel) {
		Hotels.insert(hotel);
  },
  'hotels.remove'(id) {
    Hotel.remove(id);
  },
  'hotels.city'(city) {
  	Hotel.find({"city.name": city});
  }
});