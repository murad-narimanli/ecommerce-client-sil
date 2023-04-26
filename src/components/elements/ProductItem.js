import React from "react";
import swal from "sweetalert";
import { products } from "../../api/db";
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
import { useState } from "react";
import { Switch } from "antd";
import { connect } from "react-redux";
import { addProduct, editProduct, deleteProduct } from "../../redux/actions";
const { Meta } = Card;
function ProductItem({  addProduct, editProduct, deleteProduct }) {
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
  return (
    <div className="row g-3 ">
      {products.map((product) => (
        <div
          className="card col-lg-3 me-3"
          style={{ width: "400px" }}
          key={product.id}
        >
          <img className="card-img-top" src={Image.Product1} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <h5 className="card-text">${product.price}</h5>
            <div className="text-center counter pb-3 pt-3">
              <div
                onClick={() => handleLike(product)}
                data-id={product.id}
                className="me-5 "
              >
                <span onClick={() => addWishlist(product)}>
                  {isLiked ? (
                    <HeartFilled style={{ color: "red", fontSize: "24px" }} />
                  ) : (
                    <HeartFilled style={{ color: "green", fontSize: "24px" }} />
                  )}
                </span>
              </div>
              <div
                onClick={() => {
                  Alert();
                }}
              >
                <ShoppingCartOutlined
                  className="ms-3"
                  style={{ color: "green", fontSize: "24px" }}
                  // className="basket-icon"
                  onClick={() => addToCart(product)}
                  data-id={product.id}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// const mapStateToProps = ({ products }) => ({
//   products,
// });

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  addProduct,
  editProduct,
  deleteProduct,
})(ProductItem);
