import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../assets/scss/WishList.scss"

const Basket = () => {
  return (
    <div className="container basket">
      <h1>Səbət</h1>
      <div className="text-center">
        <h3>
          <AiOutlineShoppingCart />
        </h3>
        <p>Səbətiniz boşdur</p>
        <button>Kataloga Keçin</button>
      </div>
    </div>
  );
};

export default Basket;
