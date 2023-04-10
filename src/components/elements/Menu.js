import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../assets/scss/Header.scss";
import { useLocation, NavLink } from "react-router-dom";
function Menu() {
  // let location =useLoaction()
  // let {pathname}=location

  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-2">
            <NavLink to="./" className="text-decoration-none">
              {" "}
              <Nav.Link href="#link">Ana Səhifə</Nav.Link>
            </NavLink>
            <NavLink to="./aboutus" className="text-decoration-none">
              {" "}
              <Nav.Link href="#link">Haqqımızda</Nav.Link>
            </NavLink>
            <NavLink to="./blog" className="text-decoration-none">
              {" "}
              <Nav.Link href="#link">Bloq</Nav.Link>{" "}
            </NavLink>
            <NavLink to="./shop" className="text-decoration-none">
              {" "}
              <Nav.Link href="#link">Məhsullar</Nav.Link>{" "}
            </NavLink>
            <NavLink to="./contactus" className="text-decoration-none">
              {" "}
              <Nav.Link href="#link">Əlaqə</Nav.Link>{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
