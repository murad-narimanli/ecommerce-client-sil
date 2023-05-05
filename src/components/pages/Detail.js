import React, { useState } from "react";
import Image from "../../assets/image/image";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "../../assets/scss/Detail.scss";

function Detail() {
  const arrLength = 5;
  const arr = Array(arrLength);
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const icons = Array.from({ length: count }, (_, index) => (
    <i className="icon" key={index} />
  ));
  return (
    <div className="container ">
      <div className="detail d-flex">
        <div className="left">
          <img src={Image.Product1} />
        </div>
        <div className="right">
          <h4>KENDIMIZ BAL 900 GR AKASIYA...</h4>

          <div className="rating">
            <div className="inputContainer">
              <input type="radio" name="clr1" />
              <input type="radio" name="clr1" />
              <input type="radio" name="clr1" />
              <input type="radio" name="clr1" />
              <input type="radio" name="clr1" />
              <input type="radio" name="clr1" />
            </div>
          </div>
          <h5>$3.19</h5>
          <div>
            <button
              onClick={handleDecrease}
              disabled={count === 0}
              className="btnNum"
            >
              <AiOutlineMinus />
            </button>
            <span>{count} Ədəd</span>
            <button onClick={() => setCount(count + 1)} className="btnNum">
              <AiOutlinePlus />
            </button>
            {icons}
          </div>
          <button className="btnBas">
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
