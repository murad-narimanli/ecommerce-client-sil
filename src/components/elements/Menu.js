import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../assets/scss/Header.scss";

function Menu() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded}>
      <div className="container">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="d-flex align-items-center">
            <span>Menu</span>
            <FontAwesomeIcon icon={faBars} className="ms-2" />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="closemenu" onClick={closeMenu}>
            <NavLink to="/" className="nav-link">
              Ana Səhifə
            </NavLink>
            <NavLink to="/aboutus" className="nav-link">
              Haqqımızda
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Bloq
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Məhsullar
            </NavLink>
            <NavLink to="/contactus" className="nav-link">
              Əlaqə
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Menu;
