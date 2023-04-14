import React from "react";
import { useState, useEffect } from "react";

function Footer() {
   const [isVisible, setIsVisible] = useState(false);

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
return (
<div className="footer">
<div className="container">
<div className="row">
<div className="col-md-3">
<div className="footer-info">
<h3 className="f-main">Əlaqə</h3>
<div className="bravotext f-piece">
<p>+994 12 000 0000</p>
<p>+994 50 000 0000</p>
<p>info@bravo.az</p>
<p>www.bravo.az</p>
</div>
</div>
</div>
<div className="col-md-3">
<div className="footer-links">
<h3 className="f-main">Mağazalarımız</h3>
<ul className="f-piece"  style={{ listStyle: 'none', paddingLeft: '0' }}>
<li >Əhmədli</li>
<li>20 Yanvar</li>
<li>Koroğlu</li>
<li>Gənclik Mall</li>
<li>Park Azure</li>
</ul>
</div>
</div>
<div className="col-md-3">
<div className="footer-links">
<h3 className="f-main">Haqqımızda</h3>
<ul className="f-piece" style={{ listStyle: 'none', paddingLeft: '0' }}>
<li>Vakansiyalar</li>
<li>Mağazalar Xəritəsi</li>
<li>Tərəfdaşlarımız</li>
<li>Şərtlər və Qaydalar</li>
</ul>
</div>
</div>
<div className="col-md-3">
<div className="footer-links">
<h3 className="f-main">Mobil Tətbiqə Keçid</h3>

<div className="applicationbravo d-flex">
<div className="application" onClick={() => window.open("https://apps.apple.com/us/app/bravo-supermarkets/id1427953617")}>
<span className="iconappstore"></span>
   <span className="download">Download on  </span>
   <span className="app">App Store</span>
</div>
<div className="application" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.nbcu.tve.bravotv.androidtv&hl=ru&gl=US")}>
<span className="icongoogleplay"></span>
   <span className="download">Get in on  </span>
   <span className="app">Google Play</span>
</div>
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
