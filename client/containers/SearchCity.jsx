import React from 'react';
import {composeWithTracker} from 'react-komposer';
import SearchCity from '../components/SearchCity';
import Cities from '/imports/api/cities'
import CircularProgress from 'material-ui/CircularProgress';

function composer(props, onData) {
	const handle = Meteor.subscribe('cities');
  if(handle.ready()) {
    const cities = Cities.find({}).fetch().map((city) => city.name + ", " + city.country);
    onData(null, {cities});
  };
};

export default composeWithTracker(composer, CircularProgress)(SearchCity);
