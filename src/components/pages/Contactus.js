import React from "react";
import "../../assets/scss/Contact.scss";
import { FiMessageCircle } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import swal from "sweetalert";
import "../../assets/scss/Contact.scss"

function Contactus() {
 

  const Alert = () => {
    swal({
      title: "Təşəkkürlər!",
      text: "Fikirləriniz bizim üçün önəmlidir!",
      icon: "success",
    });
  };

  return (
    <div>
      <div className="container d-flex">
        <div className="left">
          <div className="up">
            <h1>Baş ofis</h1>
            <div className="d-flex ">
              <div className="icon d-flex flex-column">
                <GoLocation className="icons" />
                <MdLocalPhone className="icons" />
                <FiMessageCircle className="icons" />
              </div>
              <div className="d-flex flex-column">
                <p> Gənclik Mall , 16 Fətəli Xan Xoyski, Bakı 1010</p>
                <p>Telefon: (012) 525 20 08</p>
                <p>Email: info@bravo.az</p>
              </div>
            </div>
          </div>
          <div className="down">
            <h3>Hörmətli müştərilərimiz,</h3>
            <p>
              Bravo Supermarket olaraq sizə daha yaxşı xidmət göstərmək üçün
              tələb, təklif və şikayətləriniz bizim üçün önəmlidir.
            </p>
            <p>
              Əlaqə telefonu: <span> (012) 924</span>
            </p>
          </div>
        </div>
        <div className="right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38075.38513845035!2d49.82034648852611!3d40.39637686309723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d67f0d9c499%3A0x86aeebb4309e65e3!2zMTYgRsmZdMmZbGkgWGFuIFhveXNraSwgQmFrxLEgMTAxMA!5e0!3m2!1saz!2saz!4v1680967935110!5m2!1saz!2saz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="box">
            <h4>Baş ofis</h4>
            <p> Gənclik Mall , 16 Fətəli Xan Xoyski, Bakı 1010</p>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-between">
        <div className="rating">
          <h1>Bizi dəyərləndirin!</h1>
          <div className="inputContainer">
            <button onClick={Alert}>Ok</button>
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
            <input type="radio" name="clr1" />
          </div>
        </div>
        <div className="partnyor">
          
        </div>
      </div>
    </div>
  );
}

export default Contactus;
