import React,{Component} from 'react';
import FilteringTable from './components/FilteringTable';
import './App.css';
import {data} from './data.js'

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      products: data
    }
    this.handleDelete=this.handleDelete.bind(this);
  }
  handleDelete(rowIndex) {
    this.setState(
        (state) => ({products: state.products.filter(
                        (element, index) => {return rowIndex !== index;})
                    })
        )
  }
  render() {
    return (
      <div className="App">
        <FilteringTable title="* * * Today's Deals * * *"  
        list={this.state.products}  
        onDelete={this.handleDelete}>
        </FilteringTable>
      </div>
    );
  }
}


export default App;
