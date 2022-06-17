
import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import useProducts from '../../Hoock/useProducts';
import './ManageProduct.css'
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
const ManageProduct = () => {
    const [products, setproducts] = useProducts();

    const navigate = useNavigate();

    const navigateToAddProduct = () => {
        navigate(`/addproduct`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete a Product?')
        if (proceed) {
            const url = `https://stark-retreat-31719.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remain = products.filter(product => product._id !== id);
                    setproducts(remain);
                })
        }
    }
    return (
        <div>
            <PageTitle title="Manage Product"></PageTitle>

            {
                // products.map(products => <div key={products._id}>
                //     <h4>{products.name}</h4>
                //     <button onClick={() => handleDelete(products._id)}>delete</button>
                // </div>)

                <div id="products" className='container'>

                    <div className="row">
                        <h1 className='text-primary text-center mt-5 mb-5'> Manage Products</h1>
                        <div className="products-container">
                            {
                                products.map(products =>

                                    <Card className='productCard border-0'>
                                        <div>  <Card.Img variant="top" src={products.img} className='card-img' /></div>

                                        <Card.Body className='cardBody'>
                                            <Card.Title> <a href=""><h2>{products.name}</h2></a> </Card.Title>
                                            <Card.Title>   <p>Price: {`${products.price}`}</p></Card.Title>
                                            <Card.Text>
                                                <p><small>{products.description}</small></p>
                                            </Card.Text>

                                            <Card.Text>
                                                <p>Quantity: <small>{products.quantity}</small></p>
                                            </Card.Text>
                                            <Card.Text>
                                                <p>Supplier: <small>{products.supplier}</small></p>
                                            </Card.Text>
                                            <Row>
                                                <Col>
                                                    <Button className='btn btn-primary' onClick={() => navigateToAddProduct()}>Add product</Button>
                                                </Col>
                                                <Col>
                                                    <Button className='btn btn-primary' onClick={() => handleDelete(products._id)}>Delete</Button>
                                                </Col>
                                            </Row>

                                        </Card.Body>
                                    </Card>

                                )
                            }
                        </div>
                    </div>
                </div>



            }

        </div>
    );
};

export default ManageProduct;