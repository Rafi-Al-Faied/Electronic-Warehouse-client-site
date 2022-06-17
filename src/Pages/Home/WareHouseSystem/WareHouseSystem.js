import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WareHouseSystem.css'
class WareHouseSystem extends Component {
    render() {
        return (
            <div className='wareshouse-system2'>
                <Container>
                    <Row className='wareshouse-system'>
                        <Col className='left-content'>
                            <h4>Our Warehousing System</h4>
                            <hr />
                            <Row className='box-content'>
                                <Col>
                                    <div className='div'>
                                        <h4>Our Storage</h4>
                                        <ul>
                                            <li>  <p>Automated storage</p></li>
                                            <li> <p>Dense storage</p></li>
                                            <li>  <p>Storage and sorting</p></li>
                                            <li>  <p>Automatic </p></li>
                                            <li>  <p>Automated storage</p></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='div'>
                                        <h4>Our Handeling</h4>
                                        <ul>
                                            <li>  <p>AGV / IGV flexible handeling</p></li>
                                            <li> <p>Self loading truck</p></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='box-content'>
                                <Col>
                                    <div className='div2'>

                                        <h4>Our Sorting</h4>
                                        <ul>
                                            <li>  <p>Crose-belt auto-sorting</p></li>
                                            <li> <p>Pivot wheel sorting</p></li>
                                            <li>  <p>Storage and sorting</p></li>
                                            <li>  <p>Module belt sorting</p></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='div2'>
                                        <h4>Our picking</h4>
                                        <ul>
                                            <li>  <p>Storage and sorting</p></li>
                                            <li> <p>Goods to person picking</p></li>
                                            <li>  <p>Order picking Management</p></li>

                                        </ul>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col className='right-content'>
                            <h4>Intoduction</h4>
                            <hr />
                            <ul>
                                <li>
                                    <p>
                                    We are a inventory based production.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                    We store products that we need and restock them.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Mainly we work on electronic products. Later on more products will be included in our warehouse.

                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WareHouseSystem;
