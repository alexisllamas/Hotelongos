import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Hoteles from './hoteles/Hoteles.jsx';
import About from './About.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Hoteles />)
		})
	}
});

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}
});