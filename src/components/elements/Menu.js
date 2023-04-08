import React from "react";
import { Navbar,  Nav } from "react-bootstrap";
import "../../assets/scss/Header.scss"
import {useLocation, NavLink} from "react-router-dom"
function Menu() {
// let location =useLoaction()
// let {pathname}=location

  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand  className="navbar" href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  >
          <Nav className="me-2">
           <NavLink  to='./'> <Nav.Link href="#link">Home</Nav.Link></NavLink>
           <NavLink to='./aboutus'> <Nav.Link href="#link" >AboutUs</Nav.Link></NavLink>
           <NavLink to='./cart'> <Nav.Link href="#link"   >Cart</Nav.Link></NavLink> 
           <NavLink to='./checkout'> <Nav.Link href="#link" >Checkout</Nav.Link></NavLink>
           <NavLink to='./contactus'> <Nav.Link href="#link" >Contact us</Nav.Link>     </NavLink>      
           <NavLink to='./product'> <Nav.Link href="#link" >Product</Nav.Link>     </NavLink>  
           <NavLink to='./shop'> <Nav.Link href="#link" >Shop</Nav.Link>     </NavLink>          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
