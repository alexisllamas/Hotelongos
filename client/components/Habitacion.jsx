import React from 'react';
import { TableRow, TableRowColumn} from 'material-ui/Table';

const Habitacion = ({room}) => (
	<TableRow>
    <TableRowColumn>{room.name}</TableRowColumn>
    <TableRowColumn>{room.numPeople}</TableRowColumn>
    <TableRowColumn>{room.price}</TableRowColumn>
  </TableRow>
)

export default Habitacion;
