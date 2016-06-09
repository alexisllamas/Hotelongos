import React from 'react';
import {Nav} from '../partials/Nav.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<header>
			<h2>Hotelongos</h2>
			<Nav />
		</header>
		<main>{content}</main>		
	</div>
)