import React from "react";
import { BsHeartFill } from 'react-icons/bs';
import "../../assets/scss/WishList.scss"

const WishList = () => {
  return <div className="container wishlist">
    <h1 >Sevimli</h1>
    <div className="text-center">
        <h3>Seçilmiş məhsullarınız yoxdur</h3>
        <p>Seçilmiş məhsul əlavə etmək üçün düyməni istifadə edin <BsHeartFill/></p>
        <button>Kataloga Keçin</button>
    </div>
  </div>;
};

export default WishList;
