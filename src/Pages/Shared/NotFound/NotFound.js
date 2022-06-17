import React from 'react';
import { Container } from 'react-bootstrap';
import PageNotFound from '../../../images/pageNotFound.webp';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
               <h2 className='text-primary text-center'>Page is sleeping</h2>
            <Container className='Notfound'>
         
            <img  src={PageNotFound} alt="" />
            </Container>
           
        </div>
    );
};

export default NotFound;