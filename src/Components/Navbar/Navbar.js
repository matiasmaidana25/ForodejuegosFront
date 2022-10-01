import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import "./navbar.css"
class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Titulo de la pagina</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Navbar-nav" />
          <Navbar.Collapse id="basic-Navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Comunidad</Nav.Link>
              <NavDropdown title="Playstation" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Deporte</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Carrera</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Shooter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Arcade</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Estrategia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Simulación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Juegos de mesa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Xbox" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Deporte</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Carrera</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Shooter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Arcade</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Estrategia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Simulación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Juegos de mesa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Nintendo" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Deporte</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Carrera</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Shooter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Arcade</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Estrategia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Simulación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Juegos de mesa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PC" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Deporte</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Carrera</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Shooter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Arcade</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Estrategia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Simulación</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Juegos de mesa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default navbar;