import React from "react";
import {
  HeartFilled,
  ShoppingCartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { FallOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "../../assets/scss/ProductItem.scss";
import Image from "../../assets/image/image";
import { useState } from "react";
const { Meta } = Card;
function ProductItem() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={Image.Product1} />}
      actions={[
        <HeartFilled className="heart-icon" />,
        <ShoppingCartOutlined className="basket-icon" />,
        <ShareAltOutlined className=" share-icon" />,
      ]}
    >
      <Meta title="KENDIMIZ BAL 900 GR AKASIYA..." />
      <div className="text-center counter pb-3 pt-3">
        <button className="product_btn me-3" onClick={inc}>+</button>
        {count}
        <button className="product_btn ms-3" onClick={dec}>-</button>
      </div>
      <Meta
        description={
          <div>
            <h1 className="product-price">₼ 5,19 ədəd</h1>
            <span style={{ color: "#BB0000", fontFamily: "Arial" }}>
              {<FallOutlined className="discount-icon me-3" />}Endirim
            </span>
          </div>
        }
      />
    </Card>
  );
}
export default ProductItem;
