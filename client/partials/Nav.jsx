import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Nav';
    }
    isActive(active) {
    	return active === this.props.active ? "active" : null;
    }
    render() {
        return (
        	<nav>
				<a className={this.isActive("main")} href="/">Inicio</a>
				<a className={this.isActive("about")} href="/about">Sobre Nosotros</a>
			</nav>
    	);
    }
}

export default Nav;
