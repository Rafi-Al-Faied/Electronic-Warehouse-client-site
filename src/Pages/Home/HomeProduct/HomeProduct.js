import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import './HomeProduct.css';
import { useNavigate } from 'react-router-dom';
const HomeProduct = () => {

    const navigate = useNavigate();
    const navigateToProductDetail = () => {
        navigate(`/manageproduct`);
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stark-retreat-31719.herokuapp.com/Browsproducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className='container'>
            <div className="row">
                <h1 className=' text-center mt-5 mb-5'>Featured Product </h1>
                <div className="products-container">
                    {
                        products.map(service => <ShowProduct
                            key={service.id}
                            service={service}
                        >
                        </ShowProduct>)
                    }
                </div>
                <div class=" col-lg-4 col-md-6 col-sm-6 col-8 mb-4 manage-product">
                    <div class="card ripe-malinka-gradient form-white">
                        <div class="card-body">

                            <form className='d-flex flex-column'>
                                <h2 class="text-center font-up font-bold py-4 white-text">Manage Product</h2>



                                <div class="text-center">
                                    <button onClick={() => navigateToProductDetail()} className='btn btn-primary'>Manage</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;