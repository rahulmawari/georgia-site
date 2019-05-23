import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../images/GT_White.png';

class Header extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home"><img src={logo} width="400" height="60" className="d-inline-block align-top"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#research">Research</Nav.Link>
                        <Nav.Link href="#peope">People</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-secondary">Search</Button>
                 </Form>
            </Navbar>
        );
    }
}

export default Header;