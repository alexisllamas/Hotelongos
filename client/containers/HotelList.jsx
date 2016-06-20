import React from 'react';
import {composeWithTracker} from 'react-komposer';
import HotelList from '../components/HotelList.jsx';
import Hotels from '/imports/api/hotels'
import CircularProgress from 'material-ui/CircularProgress';

function composer(props, onData) {
	const handle = Meteor.subscribe('hotels', props.city);
  if(handle.ready()) {
    const hotels = Hotels.find({}).fetch();
    const data = {
    	props: props,
    	hotels: hotels
    }
    onData(null, {data});
  };
};

export default composeWithTracker(composer, CircularProgress)(HotelList);
