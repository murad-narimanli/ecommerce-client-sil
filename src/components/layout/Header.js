import React from "react";
import "../../assets/scss/Header.scss"
import Menu from "../elements/Menu";
import Blog from "../pages/Blog";
import Image from "../../assets/image/image";
import Searchnav from "../elements/Searchbar";


const Header = () => {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
       <div style={{ width: "100%" }}>
       <img className="bravologo" src={Image.Bravologo} alt="" style={{ width: "200px" }} />
       </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
      <Searchnav />
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
<Menu/>
    <Blog/>
  </div>
  )
};

export default Header;
