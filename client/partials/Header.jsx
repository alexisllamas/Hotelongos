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
				<a href="/"><h2>Hotelongos</h2></a>
				<Nav />
			</header>
    	);
    }
}

export default Header;
