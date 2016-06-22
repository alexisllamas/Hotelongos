import { Meteor } from 'meteor/meteor';
import Hotels from '/imports/api/hotels';
import Countries from '/imports/api/countries';
import Cities from '/imports/api/cities';
import Reservations from '/imports/api/reservations';
import seed from './seed';

Meteor.startup(() => {
	seed();
});
