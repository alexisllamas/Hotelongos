import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider'
import Chip from 'material-ui/Chip';

import Gallery from './Gallery';
import Mapa from './Mapa';

const Hotel = ({hotel}) => {
	const images = hotel.photos.map((image) => {
		return {src: image, thumbnail: image}
	});
	const styles = {
	  chip: {
	    margin: 4,
	  },
	  wrapper: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	  phone: {
	  	float: 'right'
	  }
	};
	return (
		<Card>
			<CardMedia
	      overlay={<CardTitle title={hotel.name} subtitle={hotel.city.name}/>}
	    >
      <img src={hotel.photos[0]} />
	    </CardMedia>
			<CardText>
				<i class="fa fa-star" aria-hidden="true"></i>
				<i class="fa fa-star-o" aria-hidden="true"></i>
				<h1>Descripción:</h1>
				<p>{Fake.paragraph(10)}</p>
				<Divider />
				<Gallery images={images} />
				<Divider />
				<h1>Servicios</h1>
				<div style={styles.wrapper}>
				{hotel.services.map((service) =>
					<Chip
						key={service}
	          style={styles.chip}
	        >
	          {service}
	        </Chip>
        )}
        </div>
        <Divider />
        <h1>¿Dónde está?</h1>
        <div style={styles.wrapper}>
	        <Mapa 
	        	lat = {hotel.location.lat}
	        	lng = {hotel.location.lng}
	        	name = {hotel.name}
	        />
        </div>
        <p> {hotel.address}</p>
        <Divider />
	    </CardText>
    </Card>
)}

export default Hotel;
