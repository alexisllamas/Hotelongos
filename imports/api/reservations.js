import { Mongo } from 'meteor/mongo';

let Reservations = new Mongo.Collection("reservations");

export default Reservations;