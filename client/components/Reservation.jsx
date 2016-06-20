import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DataPickers from './DataPickers';
import Hotel from './Hotel';
import Habitaciones from './Habitaciones';
import CreditCardIcon from 'material-ui/svg-icons/action/credit-card'
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { iniciaSesion } from '../helpers';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Reservation';
        this.state = {
			    finished: false,
			    stepIndex: 0,
			  };
    }

    handleNext() {
	    const {stepIndex} = this.state;
	    this.setState({
	      stepIndex: stepIndex + 1,
	      finished: stepIndex >= 2,
	    });
	    if(this.state.stepIndex >= 2) {
	    	this.setReservation();
	    }
	  }

	  handlePrev() {
	    const {stepIndex} = this.state;
	    if (stepIndex > 0) {
	      this.setState({stepIndex: stepIndex - 1});
	    }
	  }

	  getStepContent(stepIndex, hotel) {
	    switch (stepIndex) {
	      case 0:
	        return <Hotel hotel={hotel} />;
	      case 1:
	        return <Habitaciones hotel={hotel} />;
	      case 2:
	        return <p>Holi</p>
	      default:
	        return 'You\'re a long way from home sonny jim!';
	    }
	  }
	  setReservation() {
	  	if(!Meteor.userId())
	  		iniciaSesion();
	  	else
	  		alert("Reserva");
	  }
    render() {
      const {finished, stepIndex} = this.state;
	    const contentStyle = {margin: '0 16px'};
	    return (
	    	<div>
		    	<Card>
		    		<CardTitle style={{textAlign: "center"}}title="Reservación" />
		    		<CardText>
		    			<DataPickers props={{dateStart: this.props.dateStart, dateEnd: this.props.dateEnd}} />
						</CardText>
					</Card>
					<br />
		    	<Card>
			    	<CardText>
				      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
				        <Stepper activeStep={stepIndex}>
				          <Step>
				            <StepLabel>Selecciona el hotel</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Selecciona las habitaciones</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel icon={<CreditCardIcon />}>Elige tu método de pago</StepLabel>
				          </Step>
				        </Stepper>
				        <div style={contentStyle}>
									<div>
			              {this.getStepContent(stepIndex, this.props.hotel)}
			              <div style={{marginTop: 12}}>
			                <FlatButton
			                  label="Atrás"
			                  disabled={stepIndex === 0}
			                  onTouchTap={this.handlePrev.bind(this)}
			                />
			                <RaisedButton
			                  label={stepIndex === 2 ? 'Reservar' : 'Siguiente'}
			                  primary={true}
			                  onTouchTap={this.handleNext.bind(this)}
			                />
			              </div>
									</div>
				        </div>
				      </div>
			    	</CardText>
		    	</Card>
	    	</div>
      );
    }
}

export default Reservation;

