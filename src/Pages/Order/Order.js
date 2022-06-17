import { signOut } from 'firebase/auth';
import React, { Component , useState, useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user.email;
            const url = `https://stark-retreat-31719.herokuapp.com/order?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])



        return (
            <div>
                <h2>Your order</h2>
            </div>
        );
    
}

export default Order;
