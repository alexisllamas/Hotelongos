import React from 'react';
import SearchCity from '../containers/SearchCity';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


const Main = () => (
   <Card>
   	<CardText>
	  	<h1 className="page-title">Encuentra hoteles a precios increibles</h1>
			<SearchCity className="center" />
		</CardText>
	</Card>
);

export default Main;