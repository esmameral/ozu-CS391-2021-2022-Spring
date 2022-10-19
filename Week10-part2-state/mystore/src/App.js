
import './App.css';
import { Component } from 'react';
import FilteringTable from './components/FilteringTable.js';
import ProductForm from './components/ProductForm.js';
import { data } from './data.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDelete(rowIndex) {
    this.setState(
        (state) => ({products: state.products.filter(
                        (element, index) => {return rowIndex !== index;})
                    })
        )
  }
  
  handleAdd(product) {
    let { products } = this.state;
    products.push(product);
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <FilteringTable title="Today's Deals" list={this.state.products} 
        onDelete={this.handleDelete}></FilteringTable>
        <ProductForm onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
