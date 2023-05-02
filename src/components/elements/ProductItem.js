// import React from "react";
// import swal from "sweetalert";
// import { products } from "../../api/db";
// import {
//   HeartFilled,HeartOutlined,
//   ShoppingCartOutlined,
//   ShareAltOutlined,
// } from "@ant-design/icons";
// import { FallOutlined } from "@ant-design/icons";
// import { Card } from "antd";
// import "../../assets/scss/ProductItem.scss";
// import Image from "../../assets/image/image";
// import { useState } from "react";
// import { Switch } from 'antd';
// const { Meta } = Card;
// function ProductItem() {
//   let [basket, setBasket] = useState(
//     JSON.parse(localStorage.getItem("basket")) || []
//   );

//   let [wishlist, setWishlist] = useState(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );

//   function addWishlist(currentProduct) {
//     let existingProduct = wishlist.find(
//       (product) => product.id === currentProduct.id
//     );
//     if (existingProduct) {
//       setWishlist([...wishlist]);
//     } else {
//       setWishlist([...wishlist, { ...currentProduct, inWishlist: true }]);
//     }
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }

//   function addToCart(currentProduct) {
//     let existingProduct = basket.find(
//       (product) => product.id === currentProduct.id
//     );
//     if (existingProduct) {
//       existingProduct.count++;
//       setBasket([...basket]);
//     } else {
//       setBasket([...basket, { ...currentProduct, count: 1 }]);
//     }
//     localStorage.setItem("basket", JSON.stringify(basket));
//     console.log("basket", basket);
//   }
//   const [isLiked, setIsLiked] = useState(false);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   const Alert = () => {
//     swal({
//       title: "Təşəkkürlər!",
//       text: "Məhsulunuz səbətə əlavə olundu!",
//       icon: "success",
//     });
//   };
//   return (
  
//     <div className="row g-3 ">
//       {products.map((product) => (
   
//           <div className="card col-lg-3 me-3" style={{width: "400px"}} key={product.id}>
//       <img className="card-img-top" src={Image.Product1} alt="Card image"/>
//       <div className="card-body">
//         <h4 className="card-title">{product.name}</h4>
//         <h5 className="card-text">${product.price}</h5>
//         <div className="text-center counter pb-3 pt-3">
          
//         <div onClick={()=>handleLike(product)} data-id={product.id} className="me-5 ">
//           <span onClick={() => addWishlist(product)}>
//       {isLiked ? (
//         <HeartFilled style={{ color: 'red', fontSize: '24px' }} />
//       ) : (
//         <HeartFilled style={{ color: 'green', fontSize: '24px' }} />
//       )}
//       </span>
//         </div>
//         <div   onClick={() => {
                  
//                   Alert();
//                 }}>
//       <ShoppingCartOutlined  className="ms-3"
//         style={{ color: 'green', fontSize: '24px' }}
//               // className="basket-icon"
//               onClick={() => addToCart(product)}
//               data-id={product.id }
//             />
    
//   </div>
        
      
            
//           </div>
//       </div>
//     </div>

  
      
        
//       ))}
//     </div>
    
//   );
// }
// export default ProductItem;

import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import { products } from "../../api/db";
import {
  HeartFilled,HeartOutlined,
  ShoppingCartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { FallOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "../../assets/scss/ProductItem.scss";
import Image from "../../assets/image/image";
import { useState } from "react";
import { Switch } from 'antd';
const { Meta } = Card;

function ProductItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/products')
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err))
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
    <div className="row g-3 ">
      {products.map((product) => (
   
          <div className="card col-lg-3 me-3" style={{width: "400px"}} key={product.id}>
      <img className="card-img-top" src={Image.Product1} alt="Card image"/>
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <h5 className="card-text">${product.price}</h5>
        <div className="text-center counter pb-3 pt-3">
          
        <div onClick={()=>handleLike(product)} data-id={product.id} className="me-5 ">
          <span onClick={() => addWishlist(product)}>
      {isLiked ? (
        <HeartFilled style={{ color: 'red', fontSize: '24px' }} />
      ) : (
        <HeartFilled style={{ color: 'green', fontSize: '24px' }} />
      )}
      </span>
        </div>
        <div   onClick={() => {
                  
                  Alert();
                }}
              >
                <ShoppingCartOutlined
                  className="ms-3"
                  style={{ color: "green", fontSize: "24px" }}
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

export default ProductItem;
// <Card

//   style={{
//     width: 300,
//   }}
//   cover={<img alt="example" src={Image.Product1} />}
//   actions={[
//     <HeartFilled className="heart-icon" />,
//     <ShoppingCartOutlined className="basket-icon" />,
//     <ShareAltOutlined className=" share-icon" />,
//   ]}
// >
//   <Meta title="KENDIMIZ BAL 900 GR AKASIYA..." />
//   <div className="text-center counter pb-3 pt-3">
//     <button className="product_btn me-3" onClick={inc}>+</button>
//     {count}
//     <button className="product_btn ms-3" onClick={dec}>-</button>
//   </div>
//   <Meta
//     description={
//       <div>
//         <h1 className="product-price">₼ 5,19 ədəd</h1>
//         <span style={{ color: "#BB0000", fontFamily: "Arial" }}>
//           {<FallOutlined className="discount-icon me-3" />}Endirim
//         </span>

//       </div>
//     }
//   />
// </Card>
