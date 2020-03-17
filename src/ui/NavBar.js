//--------------------------------------Carrega Bibliotecas-----------------------------------------//
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//-------------------------------------------------------------------------------------------------//
const NavBar = () => {
    return (
//--------------------------------Apresenta elementos em tela--------------------------------------//
        <div className="container-fluid" >
            <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"  >
                <Navbar.Brand href="/" ><i className="fas fa-fill-drip p-1 " ></i>&nbsp;<i>BrunoPintor</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav >  
                        <Nav.Link href="/" ><i>Home</i></Nav.Link>
                        <Nav.Link href="/Sobre" ><i>Sobre</i></Nav.Link>
                        <Nav.Link href="/Contato" ><i>Contato</i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
//-------------------------------------------------------------------------------------------------//
export default NavBar;