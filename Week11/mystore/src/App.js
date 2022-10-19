import React, { Component } from 'react';
import FilteringTable from './components/FilteringTable';
import ProductForm from './components/ProductForm';
import './App.css';
import { data } from './data.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
      message:'...Getting products, please wait...'
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  componentDidMount() {
    setTimeout(() => {this.setState({products:data, message:''})
    }, 3000);
  }

  handleAdd(product) {
    let { products } = this.state;
    products.push(product);
    this.setState({ products });
  }
  handleDelete(rowIndex) {
    this.setState(
      (state) => ({
        products: state.products.filter(
          (element, index) => { return rowIndex !== index; })
      })
    )
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
        <FilteringTable title="* * * Today's Deals * * *"
          list={this.state.products}
          onDelete={this.handleDelete}>
        </FilteringTable>
        <ProductForm onAdd={this.handleAdd} />
      </div>
    );
  }
}


export default App;
