import React from 'react';
import SearchCity from '../containers/SearchCity';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  "padding-top": "50px",
  "padding-right": "30px",
  "padding-bottom": "50px",
  "padding-left": "80px",
}

const Main = () => (
   <Paper zDepth={2}>
   	<div className= "in-card">
	  	<h1 className="page-title">Encuentra hoteles a precios increibles</h1>
			<SearchCity style={styles}/>
		</div>
	</Paper>
);

export default Main;