import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const contact = () => {
    navigate("/contactus");
  };
  const about = () => {
    navigate("/aboutus");
  };

  return (
    <div className="footer">
      <div className="container ">
        <div className="footerContainer">
          <div className="info">
            <h3 onClick={contact}>Əlaqə</h3>
            <ul>
              <li>+994 12 000 0000</li>
              <li>+994 50 000 0000</li>
              <li>info@bravo.az</li>
              <li>www.bravo.az</li>
            </ul>
          </div>
          <div className="f-shop">
            <h3>Mağazalarımız</h3>
            <ul>
              <li>Əhmədli</li>
              <li>20 Yanvar</li>
              <li>Koroğlu</li>
              <li>Gənclik Mall</li>
              <li>Park Azure</li>
            </ul>
          </div>
          <div className="f-about">
            <h3 onClick={about}>Haqqımızda</h3>
            <ul>
              <li>Vakansiyalar</li>
              <li>Mağazalar Xəritəsi</li>
              <li>Tərəfdaşlarımız</li>
              <li>Şərtlər və Qaydalar</li>
            </ul>
          </div>
          <div className="mobil">
            <h3>Mobil Tətbiqə Keçid</h3>

            <div className="applicationbravo d-flex">
              <div
                className="application"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/bravo-supermarkets/id1427953617"
                  )
                }
              >
                <span className="iconappstore"></span>
                <span className="download">Download on </span>
                <span className="app">App Store</span>
              </div>
              <div
                className="application"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.nbcu.tve.bravotv.androidtv&hl=ru&gl=US"
                  )
                }
              >
                <span className="icongoogleplay"></span>
                <span className="download">Get in on </span>
                <span className="app">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center f-down">
        BÜTÜN HÜQUQLAR QORUNUR © AZERBAIJAN SUPERMARKET MMC
      </div>
    </div>
  );
}

export default Footer;
