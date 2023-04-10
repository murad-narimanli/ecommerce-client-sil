import React from "react";
import "../../assets/scss/Header.scss";
import Menu from "../elements/Menu";
import Image from "../../assets/image/image";
import Searchnav from "../elements/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <div style={{ width: "100%" }}>
            <img
              className="bravologo"
              src={Image.Bravologo}
              alt=""
              style={{ width: "200px" }}
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Searchnav />
              </li>
              <li className="nav-item">
                <div className="login-buttons">
                  <div className="login-button enter">DAXILOL</div>
                  <div className="login-button">QEYDIYYAT</div>
                </div>
              </li>
              <li className="nav-item">
                <div className="login-button cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
              </li>
              <li className="nav-item">
                <div className="login-button heart">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Menu />

    </div>
  );
};

export default Header;
