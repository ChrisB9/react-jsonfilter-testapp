import React from 'react';

const CarStockTableHead = (props) => {
	return (
		<thead>
			<tr>
				{props.data.map((prop, index) => <th key={index}>{prop}</th>)}
			</tr>
		</thead>
	)
}

export default CarStockTableHead;