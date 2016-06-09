import React from 'react';

class HotelCard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'HotelCard';
    }
    render() {
        return (
        	<p>{this.props.hotel.name}</p>
    	)
    }
}

export default HotelCard;
