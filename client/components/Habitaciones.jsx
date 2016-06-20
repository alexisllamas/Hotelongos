import React, {Component} from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import Habitacion from './Habitacion';

const Habitaciones = ({hotel}) => { 
	return (
		<Table>
	    <TableHeader>
	      <TableRow>
	        <TableHeaderColumn>Nombre</TableHeaderColumn>
	        <TableHeaderColumn>Capacidad</TableHeaderColumn>
	        <TableHeaderColumn>Precio</TableHeaderColumn>
	      </TableRow>
	    </TableHeader>
	    <TableBody>
	    	{hotel.rooms.map((room) => (
					<Habitacion key={room.name} room={room} />
    		))}
	    </TableBody>
	  </Table>
	);
}

export default Habitaciones;
