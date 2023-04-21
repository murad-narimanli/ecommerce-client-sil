import React from "react";
import "../../assets/scss/BravoTv.scss";

function BravoTv() {
  return (
    <div className="bravotv">
      <h1>BravoTv</h1>
      <div className="container">
        <div className="youtube">
          <iframe
            src="https://www.youtube.com/embed/C6p988OZeyE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Bravo | Super Qiymət</p>
        </div>
        <div className="youtube">
          <iframe
            src="https://www.youtube.com/embed/EvG_EY31wRw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Novruz Offers</p>
        </div>
        <div className="youtube">
          <iframe
            src="https://www.youtube.com/embed/4KUQ4GAcDN0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Bravo | Super Qiymət</p>
        </div>{" "}
        <div className="youtube">
          <iframe
            src="https://www.youtube.com/embed/1KKX4Fbc4Ks"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Sərfəli-təravətli təkliflər</p>
        </div>
      </div>
    </div>
  );
}

export default BravoTv;
