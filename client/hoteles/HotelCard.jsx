import React from 'react';

class HotelCard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'HotelCard';
    }
    render() {
        return (
        	<div>
        		<a href={"/hotel/" + this.props.hotel._id}>{this.props.hotel._id}</a> - {this.props.hotel.name}
        	</div>
    	);
    }
}

export default HotelCard;
