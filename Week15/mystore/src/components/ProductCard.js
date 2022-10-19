import React from 'react';
import {
    Card, CardImg, CardText, CardHeader, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
    const { product, onDelete } = props;
    const imageLink=`../images/${product.image}`;
    return (
        <div style={{
            display: 'block'
        }}>
            
            <Card
                color="secondary"
                outline
                style={{
                    padding: 5,
                    height: '20rem'
                }}>
                <CardImg
                    alt={product.name}
                    src={imageLink}
                    top />
                <CardHeader>
                    {product.name}
                </CardHeader>
                <CardBody>
                    <CardSubtitle tag="h4" >
                        {product.price}
                    </CardSubtitle>
                </CardBody> 
            </Card>
   
            <button class="justify-content-center" onClick={() => { onDelete(product.id); }}>
                        <i>Delete</i>
                    </button>   
               

        </div>
    );
};
//yatsandaki gibi yap. incele düğmesi altta.
export default ProductCard;