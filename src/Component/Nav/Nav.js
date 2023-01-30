import React from 'react';
import {Navbar, Nav , Container} from "react-bootstrap";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Navs = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img className="logo" src={ logo } alt="Ak Business Financial"/>
                <Navbar.Brand href="#home">AK Business Financial</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className='first'>Home</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Features</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <Nav.Link href="#">Team</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navs;
