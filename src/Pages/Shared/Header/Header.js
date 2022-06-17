import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                     
                        Be Stock
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="home" active>Home</Nav.Link>
                            <Nav.Link href="home#products" >Product</Nav.Link>


                            <Nav.Link as={Link} to="addItem" >Add items</Nav.Link>
                            <Nav.Link as={Link} to="orders" >orders</Nav.Link>
                            <Nav.Link as={Link} to="myItem" >My items</Nav.Link>
                            <Nav.Link as={Link} to="manageproduct" >Manage Product</Nav.Link>
                            <Nav.Link as={Link} to="Blogs" >Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login" >
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;