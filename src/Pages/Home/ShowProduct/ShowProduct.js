import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './ShowProduct.css';

const ShowProduct = ({ service }) => {
    const { _id, name, img, description, price, quantity, supplier } = service;

    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='service'>
            {/* <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToProductDetail(id)} className='btn btn-primary'>Book: {name}</button> */}

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
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Update</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowProduct;