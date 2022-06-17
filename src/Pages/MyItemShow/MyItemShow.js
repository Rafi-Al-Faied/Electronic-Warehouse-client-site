import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MyItemShow.css'; 

const MyItemShow = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, img, price, quantity} = product;
    return (
        <div className='myItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="myItem-details-container">
                <div className="myItem-details">
                    <p className="product-name" title={product.name}>
                        { name.length > 20 ? name.slice(0, 20) + '...': name }
                    </p>
                    <p>Price: <span className='orange-color'>{product.price}</span></p>
           
                    <p><small>Quantity: {product.quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyItemShow;