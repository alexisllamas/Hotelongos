import React, {Component} from 'react';
import Hotels from '/imports/api/hotels'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class Hotel extends TrackerReact(Component)  {
    constructor(props) {
        super(props);
        this.displayName = 'Hotel';
    }
    hotel() {
    	return Hotels.findOne({_id: this.props.id});
    }
    render() {
    	let hotel = this.hotel();
		console.log(hotel);
        return (
        	<div>
        		{hotel ? (<h1>{hotel.name}</h1>) : (<p>Cargando...</p>)}
        	</div>
    	);
    }
}

export default Hotel;
