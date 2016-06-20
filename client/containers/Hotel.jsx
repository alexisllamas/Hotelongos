import {composeWithTracker} from 'react-komposer';
import Reservation from '../components/Reservation';
import Hotels from '/imports/api/hotels'
import CircularProgress from 'material-ui/CircularProgress';

function composer(props, onData) {
	const handle = Meteor.subscribe('hotel', props.id);
  if(handle.ready()) {
    const hotel = Hotels.findOne({});
    onData(null, {hotel});
  };
};

export default composeWithTracker(composer, CircularProgress)(Reservation);