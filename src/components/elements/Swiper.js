import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/scss/Swiper.scss";
import Slider from "./Slider";
import { productData, productData2, productData3, responsive } from "./data";

const Swiper = () => {
  const product = productData.map((item) => (
    <Slider
      imgUrl={item.imgUrl}
      discount={item.discount}
      name={item.name}
      beforePrice={item.beforePrice}
      afterPrice={item.afterPrice}
    />
  ));

  const product2 = productData2.map((item) => (
    <Slider
      imgUrl={item.imgUrl}
      discount={item.discount}
      name={item.name}
      beforePrice={item.beforePrice}
      afterPrice={item.afterPrice}
    />
  ));

  const product3 = productData3.map((item) => (
    <Slider
      imgUrl={item.imgUrl}
      discount={item.discount}
      name={item.name}
      beforePrice={item.beforePrice}
      afterPrice={item.afterPrice}
    />
  ));

  return (
    <div className="container">
      <div className="slide">
        <h1>Sezon təklifləri</h1>
        <Carousel responsive={responsive} infinite={true}>
          {product}
        </Carousel>
      </div>

      <div className="slide">
        <h1>Sizin üçün Seçdiklərimiz</h1>
        <Carousel responsive={responsive} infinite={true}>
          {product2}
        </Carousel>
      </div>

      <div className="slide">
        <h1>Həftənin təklifləri</h1>
        <Carousel responsive={responsive} infinite={true}>
          {product3}
        </Carousel>
      </div>
    </div>
  );
};

export default Swiper;
