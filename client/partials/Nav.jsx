import React from 'react';
import AccountsUI from '../components/AccountsUI';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Nav';
    }
    render() {
        return (
        	<nav>
				<a href="/">Inicio</a>
				<a href="/about">Sobre Nosotros</a>
                <AccountsUI />
			</nav>
    	);
    }
}

export default Nav;
