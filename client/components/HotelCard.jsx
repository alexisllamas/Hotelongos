import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const HotelCard = ({props}) => {
	const hotel = props.hotel;
  const url = '/hotels/:id'
  const params = {id: props.hotel._id};
  const queryParams = {dateStart: props.dateStart, dateEnd: props.dateEnd};
  const goToReservation = () => {
  	FlowRouter.go(url, params, queryParams)
  }
  const style = {
	  right: 0
	};
  return (
  	<article className="hotel-card">
  		<h3>{hotel.name}</h3>
  		<p>{hotel.address}</p>
  		<RaisedButton label="¡Reservar!" primary={true} onTouchTap={goToReservation} style={style} />
  	</article>
  );
}

export default HotelCard;
