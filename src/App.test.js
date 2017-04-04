import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'jest';
import { expect as chaiExpect, assert } from 'chai';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import CarStockRow from './components/CarStockRow'
import CarStockInputFilter from './components/CarStockInputFilter'
import data from './data.json';
import filter from './filter';

describe('App component', () => {
  	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
	it('match jest tree', () => {
		const component = renderer.create(<App />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should contain a table', () => {
		const app = shallow(<App />);
		expect(app.find('table')).toBeDefined();
	});
});

describe('CarStockRow component', () => {
	it('constains tr element with id', () => {
		const component = shallow(
			<CarStockRow 
			data={{id: 1}}
			properties={["id"]} />
		);
		chaiExpect(component.find('tr').children()).to.have.length(1)
	});
});

describe('CarStockInput component', () => {
	let test;
	const mockEventFunction = (event) => {test = event.target.value};
	it('should trigger on change', () => {
		const component = shallow(
			<CarStockInputFilter 
			filter={mockEventFunction} />
		);
		component.find('input').simulate('change', {target: {value: 'My new value'}});
		chaiExpect(test).to.equal('My new value');
	});
});

describe('filter function tests', () => {
	it('should return an array', () => {
		assert.isArray(filter(data.carStock, "red"));
	});

	it('should have a price, color and note key', () => {
		chaiExpect(filter(data.carStock, "8000")[0]).to.have.any.key('price', 'color', 'note');
	});

	it('should have 4 elements by searching for "19"', () => {
		chaiExpect(filter(data.carStock, "19")).to.have.length(4);
	});

	it('should contain a single complete result searching with tag "id: 6"', () => {
		chaiExpect(filter(data.carStock, "id: 6")).to.eql([{
			"color": "gray",
            "type": "Audi Commodore",
            "yearOfConstruction": 1992,
            "price": 8212,
            "id": 6
		}]);
	});

	it('should have a note searching for "dam"', () => {
		chaiExpect(filter(data.carStock, "dam")[0]).to.contain.key('notes');
	});
});

