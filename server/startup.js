import { Meteor } from 'meteor/meteor';
import Hotels from '/imports/api/hotels';
import seed from './seed';

Meteor.startup(() => {
  // code to run on server at startup
  seed();
  console.log("Hola, soy el servidor!");
});
