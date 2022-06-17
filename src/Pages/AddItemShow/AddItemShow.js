import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Card } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './AddItemShow.css';
const AddItemShow = ({ product, handleAddToCart }) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, description,quantity } = product;

    return (
        <div className='service addItem'>
            <PageTitle title="Add Item"></PageTitle>
            {/* <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>

                <p><small> {description}</small></p>
                <p><small>Seller: {seller}</small></p>
            </div> */}

            <Card className='productCard1 border-0'>
                <div>  <Card.Img variant="top" src={img} className='card-img' /></div>

                <Card.Body className='cardBody'>
                    <Card.Title> <a href=""><h2>{name}</h2></a> </Card.Title>
                    <Card.Title>   <p>Price: {`${price}`}</p></Card.Title>
                    <Card.Text>
                        <p className='p'>{description}</p>
                    </Card.Text>

                    <Card.Text>
                        <p>Quantity: <small>{quantity}</small></p>
                    </Card.Text>
                    {/* <Card.Text>
                        <p>Supplier: <small>{supplier}</small></p>
                    </Card.Text> */}
                    <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                        <p className='btn-text'>Add Item</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </Card.Body>
            </Card>



            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add Item</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
        </div>
    );
};

export default AddItemShow;