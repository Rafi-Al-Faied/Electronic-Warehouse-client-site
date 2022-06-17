import { useEffect, useState } from "react"

const useProduct = () =>{
    
    const [products, setProduct] = useState([]);

    useEffect( () =>{
        fetch('https://stark-retreat-31719.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    return [products, setProduct];
}

export default useProduct;