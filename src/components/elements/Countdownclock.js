import React, { useEffect, useState } from "react";
import "../../assets/scss/Home.scss"
import Image from "../../assets/image/image";
import { Link } from "react-router-dom";


const CountdownClock = () => {
  const initialTime = {
    hours: 12,
    minutes: 0,
    seconds: 0,
  };
  

  const [countdownTime, setCountdownTime] = useState(
    JSON.parse(localStorage.getItem("countdownTime")) || initialTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownTime.hours === 0 && countdownTime.minutes === 0 && countdownTime.seconds === 0) {
        clearInterval(interval);
      } else if (countdownTime.minutes === 0 && countdownTime.seconds === 0) {
        setCountdownTime({
          hours: countdownTime.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (countdownTime.seconds === 0) {
        setCountdownTime({
          hours: countdownTime.hours,
          minutes: countdownTime.minutes - 1,
          seconds: 59,
        });
      } else {
        setCountdownTime({
          hours: countdownTime.hours,
          minutes: countdownTime.minutes,
          seconds: countdownTime.seconds - 1,
        });
      }
    }, 1000);

    localStorage.setItem("countdownTime", JSON.stringify(countdownTime));

    return () => clearInterval(interval);
  }, [countdownTime]);

  return (
    <div>
        <div className="bravocount"><span>Bravo endirimləri ilə sevindirir!</span></div>
        <div
        style={{
          backgroundColor: "rgb(145, 211, 82)",
          color: "rgb(252 242 242)",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "80% 20% 87% 13% / 32% 63% 37% 68%",
          textAlign: "center",
          margin: "30px 0"
       
        }}
      >




      {countdownTime.hours.toString().padStart(2, "0")}:{countdownTime.minutes
        .toString()
        .padStart(2, "0")}:{countdownTime.seconds.toString().padStart(2, "0")}
    </div>
    <img src={Image.Lengushopping} />
    {/* <a href="#" className="btn-flip" data-back="Alışverişə" data-front="Başla"></a> */}
    <Link to="/shop" className="btn-flip" data-back="Alışverişə" data-front="Başla"></Link>

    </div>
   
  );
};

export default CountdownClock;

