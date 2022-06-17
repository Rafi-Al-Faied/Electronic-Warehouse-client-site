
import React, { useEffect, useState } from 'react';

const useProducts = () =>{
    const [products, setproducts] = useState([]);

    useEffect( ()=>{
        fetch('https://stark-retreat-31719.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setproducts(data));
    }, [])
    return [products, setproducts];

}

export default useProducts;