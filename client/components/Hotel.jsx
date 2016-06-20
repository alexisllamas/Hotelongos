import React, {Component} from 'react';

const Hotel = ({hotel}) => { 
	return (
    <div>
        <h1 className="page-title">{hotel.name}</h1>
        <p>{hotel.address}</p>
    </div>
)}

export default Hotel;
