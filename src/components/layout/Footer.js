import React , {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
   const [isVisible, setIsVisible] = useState(false);

   let navigate = useNavigate()
   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
 
   
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const handleScroll = () => {
     const scrollY = window.scrollY;
     if (scrollY > 50) {
       setIsVisible(true);
     } else {
       setIsVisible(false);
     }
   };
 
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };
   const buttonStyle = {
      backgroundColor: "#2196F3",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "50px",
      position: "fixed",
      bottom: "10px",

    right: "20px",
      opacity: isVisible ? "1" : "0",
      transition: "opacity 0.3s",
      cursor: "pointer",
    };

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
            <h4 onClick={contact}>Əlaqə</h4>
            <ul>
              <li>+994 12 000 0000</li>
              <li>+994 50 000 0000</li>
              <li>info@bravo.az</li>
              <li>www.bravo.az</li>
            </ul>
          </div>
          <div className="f-shop">
            <h4>Mağazalarımız</h4>
            <ul>
              <li>Əhmədli</li>
              <li>20 Yanvar</li>
              <li>Koroğlu</li>
              <li>Gənclik Mall</li>
              <li>Park Azure</li>
            </ul>
          </div>
          <div className="f-about">
            <h4 onClick={about}>Haqqımızda</h4>
            <ul>
              <li>Vakansiyalar</li>
              <li>Mağazalar Xəritəsi</li>
              <li>Tərəfdaşlarımız</li>
              <li>Şərtlər və Qaydalar</li>
            </ul>
          </div>
          <div className="mobil">
            <h4>Mobil Tətbiqə Keçid</h4>

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
      <div className="footer_bottom p-3">
      <span className=" text-center footerb_text">Copyright © 2023 Bravo</span>
      <div className="scroll-to-top d-flex justify-content-end">
            {isVisible && (
            <button onClick={scrollToTop} style={buttonStyle} className="scroll-top ">
               <i className="fas fa-arrow-up"></i>
            </button>
            )}
         </div>
</div>

    </div>
  );
}

export default Footer;
