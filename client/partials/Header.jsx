import React from 'react';
import Nav from './Nav.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
        	<header>
				<h2>Hotelongos</h2>
				<Nav active={this.props.active} />
			</header>
    	);
    }
}

export default Header;
