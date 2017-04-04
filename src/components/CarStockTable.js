import React from 'react';
import CarStockRow from './CarStockRow';
import CarStockTableHead from './CarStockTableHead'

const CarStockTable = (props) => {
	return (
		<table>
			<CarStockTableHead data={props.head}/>
			<tbody>
				{props.carStock.map((car, key) => 
					<CarStockRow key={key} data={car} properties={props.head} />)}
			</tbody>
		</table>
	)
}

export default CarStockTable;
