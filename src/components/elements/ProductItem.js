import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { FallOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "../../assets/scss/ProductItem.scss";
import Image from "../../assets/image/image";
import { Switch } from "antd";
const { Meta } = Card;

function ProductItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  let [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  function addWishlist(currentProduct) {
    let existingProduct = wishlist.find(
      (product) => product.id === currentProduct.id
    );
    if (existingProduct) {
      setWishlist([...wishlist]);
    } else {
      setWishlist([...wishlist, { ...currentProduct, inWishlist: true }]);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }

  function addToCart(currentProduct) {
    let existingProduct = basket.find(
      (product) => product.id === currentProduct.id
    );
    if (existingProduct) {
      existingProduct.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...currentProduct, count: 1 }]);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log("basket", basket);
  }
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Məhsulunuz səbətə əlavə olundu!",
      icon: "success",
    });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };

  return (
    <div className="productContainer">
      {products.map((product) => (
        <>
          <div key={product.id}>
            <div className="card-body">
            <img className="card-img-top" src={product.img} alt="Card image" />
            
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-text">{product.price} <span>azn</span></h5>
              <div className="btnCont">
                <div onClick={() => handleLike(product)} data-id={product.id}>
                  <span onClick={() => addWishlist(product)}>
                    {isLiked ? <HeartFilled style={{color:"red"}} className="heartButton"/> : <HeartFilled style={{color:"green"}} className="heartButton"/>}
                  </span>
                </div>
                <div
                  onClick={() => {
                    Alert();
                  }}
                >
                  <ShoppingCartOutlined
                  className="basketButton"
                    onClick={() => addToCart(product)}
                    data-id={product.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default ProductItem;



