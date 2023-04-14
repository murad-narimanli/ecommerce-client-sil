import React from "react";
import { Carousel } from "antd";

import Image from "../../assets/image/image";

function CarouselImage() {
  return (
    <div className="container w-50">
      <Carousel autoplay>
        <div>
          <img src={Image.Carousel2}  className="w-100" />
        </div>
        <div>
          <img src={Image.Carousel3} className="w-100" />
        </div>
        <div>
          <img src={Image.Carousel1} className="w-100" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImage;
