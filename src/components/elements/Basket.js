import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../assets/scss/WishList.scss";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import "../../assets/scss/Basket.scss";
import { Button, Space } from "antd";
import swal from "sweetalert";
import Image from "../../assets/image/image";
import { products } from "../../api/db";
import Shop from "../pages/Shop";

const Basket = () => {
  const [count, setCount] = useState(0);
  let [basket,setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);

  const navigate = useNavigate();
    return (
      <div className="container basket pt-5 pb-5">
        <h1>Səbət</h1>
        {basket !== null ? (
          <div className="cart">
            {basket.map((product) => (
              <div>
                <table className=" table table-bordered ">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Şəkil</th>
                      <th>Ad</th>
                      <th>Qiymət</th>
                      <th>Say</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={product.id}>
                      <td className="">
                        <div class="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          ></label>
                        </div>
                      </td>
                      <td className="d-flex align-items-center">
                        {" "}
                        <img
                          src={Image.Product1}
                          alt="bal"
                          className="basket_img"
                        />
                      </td>
                      <td>
                        {" "}
                        <h5 className="y-auto">{product.name}</h5>
                      </td>
                      <td>
                        <p>${product.price}</p>
                      </td>
                      <td>
                        <div className="text-center counter pb-3 pt-3">
                          <button
                            className="product_btn me-3"
                            onClick={() => increment(product.id)}
                          >
                            +
                          </button>
                          {count}
                          <button
                            className="product_btn ms-3"
                            onClick={() => decrement(product.id)}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td>
                        <CloseOutlined
                          onClick={() => removeProduct(product.id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
            <Space wrap>
              <div>
                <h3>
                  Total Price:
                  {products.reduce(
                    (total, product) => total + product.price * product.count,
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
                <Button className="basket_btn ms-3">Sifarişi təsdiqlə</Button>
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


  // generateCartItems();

  let increment = (selectedItemId) => {
    let searchingItem = basket.find((item) => item.id === selectedItemId);
    console.log("searching item", searchingItem);
    if (searchingItem === undefined) {
      basket.push({
        id: selectedItemId,
        count: 1,
      });
    } else {
      searchingItem.count++;
    }
    // generateCartItems();
    localStorage.setItem("basket", JSON.stringify(basket));
    update(selectedItemId);
  };

  let decrement = (selectedItemId) => {
    let searchingItem = basket.find((item) => item.id === selectedItemId);
    if (searchingItem !== undefined) {
      if (searchingItem.count === 0) return;
      else {
        searchingItem.count--;
      }
    } else {
      return;
    }
    update(selectedItemId);
    basket = basket.filter((item) => item.count !== 0);
    // generateCartItems();
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  let update = (id) => {
    let searchingItem = basket.find((item) => item.id === id);
    document.getElementById(id).innerHTML = searchingItem.count;
    TotalBill();
  };

  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Səbətiniz artıq boşdur!",
      icon: "success",
    });
  };
  const removeProduct = (id) => {
    const updatedBasket = basket.filter((product) => product.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const clearBasket = () => {
    localStorage.removeItem("basket");
    setBasket(null);
    Alert();
  };
  // const clearBasket = () => {
  //   localStorage.removeItem("basket");
  // }

  

  //totall bill
  let TotalBill = () => {
    if (basket.length !== 0) {
      const amount = basket
        .map((item) => {
          let { id, count } = item;
          let searchingItem = products.find((x) => x.id === id) || [];
          return count * searchingItem.price;
        })
        .reduce((x, y) => x + y, 0);
    } else {
      return;
    }
  };

  TotalBill();
};

export default Basket;
