import React from 'react';
import Nav from '../partials/Nav.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<main>
			{content}
		</main>		
	</div>
);