import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Meteor } from 'meteor/meteor';



class Mapa extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Mapa';
    }
    onMapCreated(map) {
	    map.setOptions({
	      disableDefaultUI: true
	    });
	  }
	  onDragEnd(e) {
	    console.log('onDragEnd', e);
	  }
	  onCloseClick() {
	    console.log('onCloseClick');
	  }
	  onClick(e) {
	    console.log('onClick', e);
	  }
    render() {
        return (
	        <Gmaps
		        width={'800px'}
		        height={'600px'}
		        lat={this.props.lat}
		        lng={this.props.lng}
		        zoom={16}
		        loadingMessage={'Be happy'}
		        params={{v: '3.exp', key: 'AIzaSyBGENtMkNE3hlTS_1HpxF2vRmZ4NN8aErE'}}
		        onMapCreated={this.onMapCreated}>
		        <Marker
		          lat={this.props.lat}
		          lng={this.props.lng}
		          draggable={true}
		          onDragEnd={this.onDragEnd} />
		      </Gmaps>);
    }
}

export default Mapa;
