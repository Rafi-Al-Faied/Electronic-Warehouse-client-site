import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='Blogs-container'>
            <PageTitle title="Blogs"></PageTitle>

            <Container className='blogs'>
                <h1 className='tex-center'>Full Stack Question</h1>
                <Row>
                    <Col className='column'  >
                        <h3><div className='blogs-question'> <div className='blogs-number'>1</div>  Difference between javascript and nodejs.</div></h3>
                        <p className='p'>JavaScript is a programming language that easily run in any kind of browser
                            by JS engine.On the other hand , Node js is an interpreter or a running
                            environment for a js programming language which holds excesses and requires
                            libraries which can be easily be accessed by JavaScript programming language
                            for better use.</p>
                    </Col>
                    <Col className='column'  >
                        <h3><div className='blogs-question'> <div className='blogs-number blogs-number2'>2</div> When should you use nodejs and when should you use mongodb?</div></h3>
                        <p className='p'>Node.js is used for non-blocking, event-driven servers, due to it being a
                            single-threaded nature. It's also used for traditional web sites and back-end API
                            products,it was designed with real-time, push-based architectures in mind.
                            When your data is document-centric and don't fit into the schema of a
                            relational database well,when you need to accommodate massive scale or when you are
                            prototyping  rapidly, SQL/NoSQL databases like MongoDB are a good choice.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='column'  >
                        <h3> <div className='blogs-question'><div className='blogs-number'>3</div>Differences between sql and nosql databases.</div> </h3>
                        <p className='p'> NoSQL databases are horizontally scalable  while, SQL databases are vertically scalable.
                            SQL databases are table-based.NoSQL databases are document forms,
                            key-value, graph, or wide-column stores. SQL databases are used for multi-row
                            transactions, while NoSQL is used for unstructured data like documents or JSON.</p>
                    </Col>
                    <Col className='column'>
                        <h3><div className='blogs-question'> <div className='blogs-number'>4</div> What is the purpose of jwt and how does it work?</div></h3>
                        <p className='p'>JWT, or JSON Web Token, is an open standard which is used to share security information
                            between two parties .They are- A client and a server.JWT contains encoded JSON objects,
                            including a set of claims. JWTs are signed using a cryptographic algorithm
                            that ensure that the claims can't be altered after the token is issued.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;