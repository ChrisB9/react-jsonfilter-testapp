import React from 'react';

const CarStockInputFilter = (props) => {
	return (
		<input onChange={props.filter} placeholder="type something to filter table" />
	)
}

export default CarStockInputFilter;
