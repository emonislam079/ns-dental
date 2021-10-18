import React from 'react';
import { Navbar, Container, Nav, Button,} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">N.S Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/Service">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/Doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/About">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="">Appointment</Nav.Link>
                        
                            <Button variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;