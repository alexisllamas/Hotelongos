import React from 'react';
import TextField from 'material-ui/TextField';

const FilterItems = ({props}) => {
	return (
		<TextField
			hintText="Escribe un nombre"
      floatingLabelText="Busqueda por nombre"
	    value={props.nameQuery} 
	    onChange={props.changeInputSearch} 
		/>
	)
}


export default FilterItems;