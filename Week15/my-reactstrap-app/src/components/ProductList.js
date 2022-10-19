import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';

const ProductList = (props) => {
    const { data } = props;

   
    return (
        <Container>
            <Row>
                {data.map((item, index) => {
                    return (
                        <Col key={`product-${index}`} sm="6" md="4" lg="2" >
                           <ProductCard product={item}></ProductCard>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ProductList;