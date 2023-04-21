import React from "react";
import CarouselImage from "../elements/CarouselImage";
import CountdownClock from "../elements/Countdownclock";
import Submenucatalog from "../elements/Submenucatalog";
import "../../assets/scss/Home.scss";
import ConsultationRequest from "../elements/ConsultationRequest";
import Discount from "../elements/Discount";
import Swiper from "../elements/Swiper";
import BravoTv from "../elements/BravoTv";
import Partners from "../elements/Partners";

const Home = () => {
  return (
    <div>
      <div className=" pb-5 bt-5 mt-5 mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-xs-12 subres">
            <Submenucatalog />
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 carouselresp">
            <CarouselImage />
            <Discount />
          </div>

          <div className="col-lg-3 col-md-12 col-xs-12  countdown-container">
            <div className="container">
              <CountdownClock />
            </div>
          </div>
          <div>
            <Swiper />
            <BravoTv />
            <Partners />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
