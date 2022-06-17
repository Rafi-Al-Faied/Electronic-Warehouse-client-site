import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hoock/useCart';
import useProducts from '../../Hoock/useProducts';
import { removeFromDb } from '../../utilities/db';
import Cart from '../Cart/Cart';
import MyItemShow from '../MyItemShow/MyItemShow';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './MyItem.css';

const MyItem = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const proceed = window.confirm('Are you sure delete a Product?')
        if(proceed){
            const rest = cart.filter(pd => pd._id !== product._id);
            setCart(rest);
            removeFromDb(product._id);
        }
       
    }

    
    return (
        <div className='shop-container'>
            <PageTitle title="My Item"></PageTitle>
            <div className="review-items-container">
                {
                    cart.map(product => <MyItemShow
                        key={product._id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></MyItemShow>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button onClick={()=>navigate('/shipment')}>Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default MyItem;