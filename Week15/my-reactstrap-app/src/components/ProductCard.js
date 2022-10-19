import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const ProductCard = (props) => {
  const { product } = props;
  const baseUrl = '/images/';
  return (
    <Card>
      <CardImg src={`${baseUrl}/${product.img}.jpg`} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description.substring(0, 100)}</CardText>
        <Button color="primary">Add to Cart</Button>
        <Button color="danger">Delete</Button>
      </CardBody>
    </Card>

  );
};
export default ProductCard;