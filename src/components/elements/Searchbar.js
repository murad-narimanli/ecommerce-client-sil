import React from "react";
import { BsSearch } from "react-icons/bs";

import "../../assets/scss/Header.scss";

const Searchbar = () => {
  return (
    <div className="inputBox">
      <input type="text" placeholder="Axtardığınız məhsulun adını bura yazın" />
      <a href="#">
        {" "}
        <BsSearch className="search" />{" "}
      </a>
    </div>
  );
};

export default Searchbar;
