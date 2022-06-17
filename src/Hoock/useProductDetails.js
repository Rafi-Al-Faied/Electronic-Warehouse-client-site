import { useEffect, useState } from "react"

const useProductDetails = productId =>{
    
    const [products, setProduct] = useState({});

    useEffect( () =>{
        fetch(`https://stark-retreat-31719.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productId]);

    return [products];
}

export default useProductDetails;