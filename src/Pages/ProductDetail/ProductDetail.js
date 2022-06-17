import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useProductDetails from '../../Hoock/useProductDetails';

const ProductDetails = () => {
    const { productId } = useParams();
    // const [product, SetProduct] = useState({});
    const [product] = useProductDetails(productId);

    // useEffect(() => {
    //     const url = `https://stark-retreat-31719.herokuapp.com/Browsproducts/${productId}`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => SetProduct(data));

    // }, []);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleUpdateQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;


        const updatedProduct = { quantity };
        const url = `https://stark-retreat-31719.herokuapp.com/Browsproducts/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Prodct Update successfully!!!');
                event.target.reset();
            })


    }

    // const handleDeleteQuantity = (event) => {
    //     event.preventDefault();
    //     const quantity = event.target.quantity.value;

    //     const updatedProduct = { quantity };

    //     // send data to the server
    //     const url = `https://stark-retreat-31719.herokuapp.com/products/${productId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedProduct)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('Product update successfully!!!');
    //             event.target.reset();
    //         })
    //     console.log('succes');
    // }


    const navigate = useNavigate();
    const navigateToProductDetail = () => {
        navigate(`/manageproduct`);
    }


    return (
        <div>
            {/* <h2>Welcome to detail: {product._id}</h2> */}
            <div className='text-center'>

                <h3>this is inventory page</h3>
                <div className="products-container container-fluid">

                    <Card className='productCard'>
                        <div>  <Card.Img variant="top" src={product.img} className='card-img' /></div>

                        <Card.Body className='cardBody'>
                            <Card.Title> <a href=""><h2>{product.name}</h2></a> </Card.Title>
                            <Card.Title>   <p>Price: {`${product.price}`}</p></Card.Title>
                            <Card.Text>
                                <p><small>{product.description}</small></p>
                            </Card.Text>

                            <Card.Text>
                                <p>Quantity: <small>{product.quantity}</small></p>
                            </Card.Text>
                            {/* <Card.Text>
                        <p>Supplier: <small>{supplier}</small></p>
                    </Card.Text> */}
                            <button className='btn btn-primary'>manage</button>
                        </Card.Body>
                    </Card>

                    <Card className='productCard'>
                        <div>  <Card.Img variant="top" src={product.img} className='card-img' /></div>

                        <Card.Body className='cardBody'>
                            <Card.Title> <a href=""><h2>{product.name}</h2></a> </Card.Title>
                            <Card.Title>   <p>Price: ${`${product.price}`}</p></Card.Title>
                            <Card.Text>
                                <p><small>{product.description}</small></p>
                            </Card.Text>

                            <Card.Text>
                                <p>Quantity: <small>{product.quantity}</small></p>
                            </Card.Text>
                            {/* <Card.Text>
                        <p>Supplier: <small>{supplier}</small></p>
                    </Card.Text> */}
                            <button className='btn btn-primary'>manage</button>
                        </Card.Body>
                    </Card>

                    <div>
                        <div class=" col-lg-8 col-md-12 col-sm-12 col-12 mb-4 ">
                            <div class="card ripe-malinka-gradient form-white">
                                <div class="card-body">

                                    <form className='d-flex flex-column' onSubmit={handleUpdateQuantity}>
                                        <h2 class="text-center font-up font-bold py-4 white-text">Update Product</h2>

                                        <div class="md-form">
                                            <i class="fa fa-envelope prefix white-text"></i>
                                            <input id="orangeForm-email2" class="form-control" placeholder='Quantity' type='number' {...register("quantity",)} />
                                            <label for="orangeForm-email2"></label>
                                        </div>

                                        <div class="text-center">
                                            <input type="submit" value='Update' className='btn btn-primary' />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-8 col-md-12 col-sm-12 col-12 mb-4 ">
                            <div class="card ripe-malinka-gradient form-white">
                                <div class="card-body">

                                    <form className='d-flex flex-column'>
                                        <h2 class="text-center font-up font-bold py-4 white-text">Manage Inventories</h2>



                                        <div class="text-center">
                                            <button onClick={() => navigateToProductDetail()} className='btn btn-primary'>Manage</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-8 col-md-12 col-sm-12 col-12 mb-4 ">
                            <div class="card ripe-malinka-gradient form-white">
                                <div class="card-body">

                                    <form className='d-flex flex-column'>
                                        <h2 class="text-center font-up font-bold py-4 white-text">Manage Proceed</h2>



                                        <div class="text-center">
                                            <Link to={`/checkout/${productId}`}>
                                                <button className='btn btn-primary'>Proceed Checkout</button>
                                            </Link>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;