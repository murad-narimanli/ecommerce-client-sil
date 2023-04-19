import React from "react";
import "../../assets/scss/Swiper.scss";

function Slider(props) {
  return (
    <div>
      <div className="card slideCard">
        <span>Endirim</span>
        <img src={props.imgUrl} />
        <b>{props.discount}</b>
        <h4>{props.name}</h4>
        <div className="d-flex align-items-center justify-content-between cardDown">
          <div>
            <del>₼{props.beforePrice}</del>
            <p>₼ {props.afterPrice}</p>
          </div>
          <div>
            <button>Səbətə at</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
