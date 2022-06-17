import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hoock/useProduct';
import { addToDb, getStoredCart } from '../../utilities/db';
import Cart from '../Cart/Cart';
import Product from '../AddItemShow/AddItemShow';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './AddItem.css';

const AddItem = () => {
    const [products, setProduct] = useProduct();
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        
        <div className='shop-container'>
            <PageTitle title="Add Item"></PageTitle>
              <div className="cart-container2">
                <Cart cart={cart}>
                    <Link to="/myItem">
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/myItem">
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default AddItem;