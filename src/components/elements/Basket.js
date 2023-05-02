import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../assets/scss/WishList.scss";
import { CloseOutlined } from "@ant-design/icons";
import "../../assets/scss/Basket.scss";
import { Button, Space } from "antd";
import swal from "sweetalert";
import Image from "../../assets/image/image";

const Basket = () => {
  const navigate = useNavigate();

  const payment = () => {
    navigate("/payment");
  };

  const [count, setCount] = useState(1);
  let [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );

  //functions

  const totalPrice = () => {
    let total = basket.reduce(
      (total, product) => total + product.price * product.count.toFixed(2),
      0
    );
    document.getElementById(
      "totalPrice"
    ).innerHTML = `Total Price: ${total.toFixed(2)}`;
  };
  //increment
  let increment = (product) => {
    basket.forEach((p) => {
      if (p.id === product.id) {
        product.count++;
      }
    });
    document.getElementById(product.id).innerHTML = product.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    totalPrice();
  };

  //decrement
  let decrement = (product) => {
    basket.forEach((p) => {
      if (p.id === product.id) {
        if (product.count > 1) {
          product.count--;
        }
      }
    });
    document.getElementById(product.id).innerHTML = product.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    totalPrice();
  };

  //alert
  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Səbətiniz artıq boşdur!",
      icon: "success",
    });
  };

  //remove product
  const removeProduct = (id) => {
    const updatedBasket = basket.filter((product) => product.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  //clear basket
  const clearBasket = () => {
    localStorage.removeItem("basket");
    setBasket(null);
    Alert();
  };
  

  return (
    <div className="container basket pt-5 pb-5">
      <h1>Səbət</h1>
      {basket !== null ? (
        <div className="cart">
          {basket.map((product) => (
            <div>
              <div className="table-responsive">
              <table className=" table table-bordered table-basket ">
                <thead>
                  <tr>

                    <th>Şəkil</th>
                    <th>Ad</th>
                    <th>Qiymət</th>
                    <th>Say</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={product.id}>
                    
                    <td className="d-flex align-items-center">
                      <div className="bg-image pb-5">
                      {" "}
                      <img
                        src={product.img}
                        alt="bal"
                        className="basket_img"
                      />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <h5 className="y-auto pt-4">{product.name}</h5>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center pt-3">
                      <h2 className="">${product.price}</h2>
                      </div>
                    </td>
                    <td>
                      <div className=" counter pb-3 pt-3">
                        <button
                          className="basket_btn2 me-3"
                          onClick={() => increment(product)}
                        >
                          +
                        </button>
                        <h2 id={product.id}>{product.count}</h2>
                        <button
                          className="basket_btn2 ms-3"
                          onClick={() => decrement(product)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td className="pt-2 ">
                      <div className="x-auto text-center">
                      <CloseOutlined className="remove-item "
                        onClick={() => removeProduct(product.id)}
                      />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          ))}
          <Space wrap>
            <div>
              <h3 id="totalPrice"  data-text="Total Price:">
                Total Price:
                {basket.reduce(
                  (total, product) =>
                    total + product.price * product.count.toFixed(2),
                  0
                )}
              </h3>
              <Button
                type="primary"
                onClick={() => {
                  clearBasket();
                  Alert();
                }}
              >
                Səbəti boşalt!
              </Button>
              <Button onClick={payment} className="basket_btn ms-3">
                Sifarişi təsdiqlə
              </Button>
            </div>
          </Space>
        </div>
      ) : (
        <div className="text-center">
          <h3>
            <AiOutlineShoppingCart />
          </h3>
          <p>Səbətiniz boşdur</p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Kataloga Keçin
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
