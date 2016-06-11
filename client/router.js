import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Hoteles from './hoteles/Hoteles.jsx';
import Hotel from './hoteles/Hotel.jsx';
import About from './About.jsx';
import Header from './partials/Header.jsx'

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (
				<div>
					<Header active="main" />
					<Hoteles />
				</div>
			)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (
				<div>
					<Header active="about" />
					<About />
				</div>
			)
		})
	}
});

FlowRouter.route('/hotel/:id', {
	action(params) {
		mount(MainLayout, {
			content: (
				<div>
					<Header />
					<Hotel id={params.id} />
				</div>
			)
		})
	}
});