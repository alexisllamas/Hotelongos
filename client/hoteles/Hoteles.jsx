import React, {Component, PropTypes} from 'react';
import Hotels from '/imports/api/hotels'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import HotelCard from './HotelCard.jsx';

class Hoteles extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        this.displayName = 'Hoteles';
        let vari = undefined;
        let search =  vari ? vari : "";
        this.state = {
        	search: search
        };
    }
    hotels() {
        return Hotels.find().fetch();
    }
    updateSearch(event) {

    	this.setState({search: event.target.value});
    }

    render() {
    	let hotels = this.hotels();

    	let filteredHotels = hotels.filter(
			(hotel) => {
				return hotel.name.toLowerCase().startsWith(this.state.search.toLowerCase());
			}
		);
    	
        return (
        	<div>
	        	<input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
	        	<h1 className="page-title">Hotelongos</h1>
	        	<ul>
	        		{filteredHotels.map((hotel) => {
	        		return (
	        			<li key={hotel._id}>
	        				<HotelCard hotel={hotel} />
	        			</li>
	        			)
	        	})}
	        	</ul>
	        	
			</div>
    	);
    }
}

export default Hoteles;
