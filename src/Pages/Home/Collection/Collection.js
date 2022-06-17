import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Collection.css';

const Collection = () => {
    return (
        <div>
            <Container className='ourCollection'>
                <h1>Our Collection</h1>
                <Row className='allCollection'>
                    <Col className="collection">
                        <img src="https://i.ibb.co/xXCcYrK/tag-heuer-02.jpg" alt="Snow" ></img>
                        <div className='centered'>
                            <h2>SmartWatch</h2>
                        </div>
                    </Col>
                    <Col className="collection">
                        <img src="https://i.ibb.co/DCmWJrQ/imac4-removebg-preview.png" alt="Snow" ></img>
                        <div className='centered'><h2>Computer {`&`} Tablet</h2></div>
                    </Col>
                    <Col className="collection">
                        <img src="https://i.ibb.co/RvJGYKX/xperia-z2-01-removebg-preview.png" alt="Snow" ></img>
                        <div className='centered'><h2>CellPhones</h2></div>
                    </Col>
                    <Col className="collection">
                        <img src="https://i.ibb.co/NFfw5xj/beats-narkitecture-01-removebg-preview.png" alt="Snow" ></img>
                        <div className='centered'><h2>Accessories</h2></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Collection;