import React from "react";
import { Navbar,  Nav } from "react-bootstrap";
import "../../assets/scss/Header.scss"

function Menu() {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand  className="navbar" href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  >
          <Nav className="me-2">
            <Nav.Link href="#link">Blog Page</Nav.Link>
            <Nav.Link href="#link">Vegetables & Fruits</Nav.Link>
            <Nav.Link href="#link">FoodGrains, Oil & Masala</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
