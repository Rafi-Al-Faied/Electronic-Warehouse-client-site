import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useProductDetails from '../../../Hoock/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
const Checkout = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const [user] = useAuthState(auth);
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://stark-retreat-31719.herokuapp.com/myorder', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                  toast('Your order is booked!!!')
                    event.target.reset();
                }
                console.log(response);
            })
    }

    return (
        <div>
            <h2>Please order: {product.name}</h2>

            <div class="container mt-4 addProduct-form">


                <div class="row">

                    <div class=" col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mt-5">
                        <div class="card ripe-malinka-gradient form-white">
                            <div class="card-body">

<form className='d-flex flex-column' onSubmit={handlePlaceOrder}>
                                    <h2 class="text-center font-up font-bold py-4 white-text">Add New Product</h2>
                                    <div class="md-form">
                                        <i class="fa fa-user prefix white-text"></i>
                                        <input type="text" id="orangeForm-name2" class="form-control" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                                        <label for="orangeForm-name2"></label>
                                        <div class="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <div class="md-form">
                                        <i class="fa fa-envelope prefix white-text"></i>
                                        <textarea type="text" id="orangeForm-email2" class="form-control" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                                        <label for="orangeForm-email2"></label>
                                    </div>


                                    <div class="md-form">
                                        <i class="fa fa-lock prefix white-text"></i>
                                        <input type="text" id="orangeForm-pass2" class="form-control" value={product.name} name="product" placeholder='product' required readOnly />
                                        <label for="orangeForm-pass2"></label>
                                    </div>
                                    <div class="md-form">
                                        <i class="fa fa-envelope prefix white-text"></i>
                                        <input id="orangeForm-email2" class="form-control" name="address" placeholder='address' autoComplete='off' required type='text' />
                                        <label for="orangeForm-email2"></label>
                                    </div>

                                    <div class="md-form">
                                        <i class="fa fa-envelope prefix white-text"></i>
                                        <input id="orangeForm-email2" class="form-control" type="text" name="phone" placeholder='phone' required />
                                        <label for="orangeForm-email2"></label>
                                    </div>





                                    <div class="text-center">
                                        <input type="submit" value='Place order' />
                                    </div>
                                    <ToastContainer />
                                </form>
                              
                            </div>
                        </div>
                    </div>
                </div>
      
            </div>
        </div>
    );
};

export default Checkout;