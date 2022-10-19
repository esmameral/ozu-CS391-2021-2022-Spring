import React from 'react';
import ProductList from './components/ProductList'
import './App.css';
import { data } from './data.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>My Product List</h1>
          <ProductList data={this.state.productList}></ProductList>

        </header>
      </div>
    );
  }
}
export default App;
