import React from 'react';
import HotelCard from './HotelCard';
import DatePicker from 'material-ui/DatePicker';
import { sumDays } from '../helpers';
import FilterItems from './FilterItems';
import DataPickers from './DataPickers';
import SearchCity from '../containers/SearchCity';

const changeInputSearch = (event) => {
    let search = event.target.value;
    if(search.length > 0)
        FlowRouter.setQueryParams({name: search});
    else
        FlowRouter.setQueryParams({name: null});
}

const filterHotels = (hotels, name, minRating, maxRating, minStars, maxStars, services, minPrice, maxPrice) => {
  let filteredHotels = hotels;

  filteredHotels = hotels.filter(
      (hotel) => {
          return hotel.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      }
  );
  if(minRating != null) {
  	console.log(minRating);
	  filteredHotels = filteredHotels.filter(
	      (hotel) => {
	          return hotel.rating >= minRating;
	      }
	  );
	}
	if(maxRating != null) {
	  filteredHotels = filteredHotels.filter(
	      (hotel) => {
	          return hotel.rating <= maxRating;
	      }
	  );
	}
	if(minStars != null) {
	  filteredHotels = filteredHotels.filter(
	      (hotel) => {
	          return hotel.stars >= minStars;
	      }
	  );
	}
	if(maxStars != null) {
	  filteredHotels = filteredHotels.filter(
	      (hotel) => {
	          return hotel.stars <= maxStars;
	      }
	  );
	}
	if(minPrice != null) {
	  filteredHotels = filteredHotels.filter(
	      (hotel) => {
	          return hotel.rooms[0].price >= minPrice;
	      }
	  );
	}
	if(maxPrice != null) {
	  filteredHotels = filteredHotels.filter(
	      (hotel) => {
	          return hotel.rooms[0].price <= maxPrice;
	      }
	  );
	}
  return filteredHotels;
}


const HotelList = ({data}) => {
	const props = data.props;
	const {nameQuery, minRating, maxRating, minStars, maxStars, minPrice, maxPrice} = props;
	const services = [];
	
	let filteredHotels = filterHotels(data.hotels, nameQuery, minRating, maxRating, minStars, maxStars, services, minPrice, maxPrice);

	const hoteles = filteredHotels.length > 0 ? (
		<ul>
		 	{filteredHotels.map((hotel) => (
        <HotelCard key={hotel._id} props={{hotel: hotel, dateStart: props.dateStart, dateEnd: props.dateEnd}} />
	 		))}
	  </ul>) : (<p>No hay hoteles, intenta otra busqueda</p>);

	return (
	<div>
		<SearchCity />
		<DataPickers 
			props={{dateStart: props.dateStart, dateEnd: props.dateEnd}}
		/>
		<FilterItems 
			props={{nameQuery: nameQuery, changeInputSearch: changeInputSearch}}
		/>
		{hoteles}
  </div>
);
}

export default HotelList;