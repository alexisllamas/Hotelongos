import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'About';
    }
    render() {
        return (
        	<div>
        		<h1>About</h1>
    			<p>About us.</p>
			</div>
    	);
    }
}

export default About;
