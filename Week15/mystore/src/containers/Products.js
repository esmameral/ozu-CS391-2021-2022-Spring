import React, { Component } from 'react';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';

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
      <Container>
         <Row>
          <Col sm="2">
            <ProductForm onAdd={this.handleAdd} />
          </Col>
        </Row>
        <Row>
          {this.state.products.map((item, index) => {
            return (

              <Col key={`product-${index}`} sm="6" md="4" lg="2" >
                <ProductCard product={item} onDelete={this.handleDelete}></ProductCard>
              </Col>
            );
          })}
        </Row>
       
      </Container>
    );
  }
}


export default Products;
