import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (


        <footer className='text-center mt-5 footer'>
            <Container>
                <Row className='row'>
                    <Col>
                        <div className='column'>
                            <h3>About Us</h3>
                            <p>
                                We are e inventory based production. We store products that we need and restock them.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='column'>
                            <h3>Newsletter</h3>
                            <form className='footer-form'>
                                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                                <input type="email" placeholder='enter your email address' />
                                <button type='submit
                            '>   <FontAwesomeIcon icon={faArrowCircleRight} className='icon' /></button>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <div className='column column3'>
                            <h3>Follow Me</h3>
                            <p>Let us be social</p>
                            <div className='icons'>
                                <a href=""><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                                <a href=""> <FontAwesomeIcon icon={faGithub} className='icon icon2' /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} className='icon icon3' /></a>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>


            <div className='copy'> <p><small>copyright @ {year} </small></p></div>
        </footer>


    );
};

export default Footer;