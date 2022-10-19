import React, { Component } from 'react';
import FilteringTable from '../components/FilteringTable';
import ProductForm from '../components/ProductForm';
import axios from 'axios';


const api = axios.create({ baseURL: `http://localhost:3001/products` });
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      message: '...Getting products, please wait...'
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  getProducts = () => {
    api.get('/').then(res => {
      const list = res.data;
      this.setState({ products: list, message: "" });
    })
  }
  componentDidMount() {
    this.getProducts();
  }



  handleAdd(product) {
    api.post('/', product)
      .then(res => {
        let { products } = this.state;
        products.push(res.data);
        this.setState({ products });
      })
  }

  handleDelete(id) {
    api.delete(`/${id}`).then(
      this.setState(
        (state) => ({
          products: state.products.filter(
            (element) => { return id !== element.id; })
        })
      )
    )
  }

  render() {
    return (

      <div style={{ padding: "1rem 0" }}>
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


export default Products;
