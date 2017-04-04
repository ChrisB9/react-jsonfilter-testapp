import React from 'react';

const CarStockRow = (props) => {
	return (
		<tr>
			{props.properties.map((prop, index) => <td key={index}>{props.data[prop]}</td>)}
		</tr>
	)
}

export default CarStockRow;