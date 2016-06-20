import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import { sumDays } from '../helpers';

const DataPickers = ({props}) => {
	const changeDateEnd = (event, date) => {
	  FlowRouter.setQueryParams({dateEnd: date});
	};
	const changeDateStart = (event, date) => {
	  FlowRouter.setQueryParams({dateStart: date});
	  if(date >= props.dateEnd) {
	      FlowRouter.setQueryParams({dateEnd: sumDays(date, 1)});
	  }
	};
	return (
		<div>
			<DatePicker hintText="Fecha inicial"
		    value={props.dateStart}
		    onChange={changeDateStart}
		    minDate={new Date()}
		    floatingLabelText="Llegada"
		    autoOk={true}
			/>
			<DatePicker hintText="Fecha final"
		    value={props.dateEnd}
		    onChange={changeDateEnd}
		    floatingLabelText="Salida"
		    minDate={sumDays(new Date(props.dateStart))}
		    maxDate={sumDays(new Date(props.dateStart), 30)}
		    autoOk={true}
			/>
		</div>
	)
}


export default DataPickers;