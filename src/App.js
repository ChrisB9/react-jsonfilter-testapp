import React, { Component } from 'react';
import CarStockTable from './components/CarStockTable';
import CarStockInputFilter from './components/CarStockInputFilter';
import filter from './filter';
import logo from '../public/favicon-96x96.png';
import './App.css';
import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      carStock : this.addIdToObject(data.carStock)
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  addIdToObject(object) {
    return object.map((el, index) => {
      el.id = ++index;
      return el
    })
  }

  eventHandler(event) {
    this.setState({
      carStock: filter(data.carStock, event.target.value.toLowerCase())
    })
  }

  keysFromObject(object) {
    let set = new Set();
    object.forEach((el) => {
      Object.keys(el).forEach((property) => {set.add(property)})
    });
    let arr = Array.from(set);
    arr.splice(arr.indexOf("id"), 1);
    return arr;
  }

  componentDidUpdate() {
    console.log("app updated")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          car stock filter
        </div>
        <div className="App-intro">
          <CarStockInputFilter filter={this.eventHandler}/>
          <CarStockTable 
            head={["id", ...this.keysFromObject(data.carStock)]} 
            carStock={this.state.carStock} />
        </div>
      </div>
    );
  }
}

export default App;
