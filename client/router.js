import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout';
import HotelList from './containers/HotelList';
import Hotel from './containers/Hotel';
import Main from './components/Main';
import About from './components/About';
import {sumDays} from './helpers';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (
					<Main />
			)
		})
	}
});

FlowRouter.route('/hotels/city/:city', {
	action(params, queryParams) {
		console.log(queryParams);
		const queryName = queryParams.name ? queryParams.name : '';
		const dateStart = queryParams.dateStart ? new Date(queryParams.dateStart) : new Date();
		const dateEnd = queryParams.dateEnd ? new Date(queryParams.dateEnd) : sumDays();
		const minRating = queryParams.minRating ? queryParams.minRating : null;
		const maxRating = queryParams.maxRating ? queryParams.maxRating : null;
		const minStars = queryParams.minStars ? queryParams.minStars : null;
		const maxStars = queryParams.maxStars ? queryParams.maxStars : null;
		const minPrice = queryParams.minPrice ? queryParams.minPrice : null;
		const maxPrice = queryParams.maxPrice ? queryParams.maxPrice : null;
		mount(MainLayout, {
			content: (
					<HotelList city={params.city} 
						nameQuery={queryName}
						dateStart={dateStart}
						dateEnd={dateEnd}
						minRating={minRating}
						maxRating={maxRating}
						minStars={minStars}
						maxStars={maxStars}
						minPrice={minPrice}
						maxPrice={maxPrice}
					/>
			)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (
					<About />
			)
		})
	}
});

FlowRouter.route('/hotels/:id', {
	action(params, queryParams) {
		const dateStart = queryParams.dateStart ? new Date(queryParams.dateStart) : new Date();
		const dateEnd = queryParams.dateEnd ? new Date(queryParams.dateEnd) : sumDays();
		mount(MainLayout, {
			content: (
					<Hotel id={params.id} dateEnd={dateEnd} dateStart={dateStart} />
			)
		})
	}
});