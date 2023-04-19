// import React , {useState , useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import "../../assets/scss/Header.scss"

// function Footer() {
//    const [isVisible, setIsVisible] = useState(false);

//    let navigate = useNavigate()
//    useEffect(() => {
//      window.addEventListener("scroll", handleScroll);
 
   
//      return () => window.removeEventListener("scroll", handleScroll);
//    }, []);
 
//    const handleScroll = () => {
//      const scrollY = window.scrollY;
//      if (scrollY > 50) {
//        setIsVisible(true);
//      } else {
//        setIsVisible(false);
//      }
//    };
 
//    const scrollToTop = () => {
//      window.scrollTo({ top: 0, behavior: "smooth" });
//    };
//    const buttonStyle = {
//       backgroundColor: "#2196F3",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "50px",
//       position: "fixed",
//       bottom: "10px",

//     right: "20px",
//       opacity: isVisible ? "1" : "0",
//       transition: "opacity 0.3s",
//       cursor: "pointer",
//     };

//   const contact = () => {
//     navigate("/contactus");
//   };
//   const about = () => {
//     navigate("/aboutus");
//   };

//   return (
//     <div className="footer">
//       <div className="container ">
//         <div className="footerContainer">
//           <div className="info">
//             <h4 onClick={contact}>Əlaqə</h4>
//             <ul>
//               <li>+994 12 000 0000</li>
//               <li>+994 50 000 0000</li>
//               <li>info@bravo.az</li>
//               <li>www.bravo.az</li>
//             </ul>
//           </div>
//           <div className="f-shop">
//             <h4>Mağazalarımız</h4>
//             <ul>
//               <li>Əhmədli</li>
//               <li>20 Yanvar</li>
//               <li>Koroğlu</li>
//               <li>Gənclik Mall</li>
//               <li>Park Azure</li>
//             </ul>
//           </div>
//           <div className="f-about">
//             <h4 onClick={about}>Haqqımızda</h4>
//             <ul>
//               <li>Vakansiyalar</li>
//               <li>Mağazalar Xəritəsi</li>
//               <li>Tərəfdaşlarımız</li>
//               <li>Şərtlər və Qaydalar</li>
//             </ul>
//           </div>
//           <div className="mobil">
//             <h4>Mobil Tətbiqə Keçid</h4>

//             <div className="applicationbravo d-flex">
//               <div
//                 className="application"
//                 onClick={() =>
//                   window.open(
//                     "https://apps.apple.com/us/app/bravo-supermarkets/id1427953617"
//                   )
//                 }
//               >
//                 <span className="iconappstore"></span>
//                 <span className="download">Download on </span>
//                 <span className="app">App Store</span>
//               </div>
//               <div
//                 className="application"
//                 onClick={() =>
//                   window.open(
//                     "https://play.google.com/store/apps/details?id=com.nbcu.tve.bravotv.androidtv&hl=ru&gl=US"
//                   )
//                 }
//               >
//                 <span className="icongoogleplay"></span>
//                 <span className="download">Get in on </span>
//                 <span className="app">Google Play</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer_bottom p-3">
//       <span className=" text-center footerb_text">Copyright © 2023 Bravo</span>
//       <div className="scroll-to-top d-flex justify-content-end">
//             {isVisible && (
//             <button onClick={scrollToTop} style={buttonStyle} className="scroll-top ">
//                <i className="fas fa-arrow-up"></i>
//             </button>
//             )}
//          </div>
// </div>

//     </div>
//   );
// }

// export default Footer;
import "../../assets/scss/Footer.scss"

const Footer = () =>{
  return(
    <div className="pg-footer">
        <footer className="footer">
          <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" />
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name">Əlaqə</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">+994 12 000 0000</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">+994 50 000 0000</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">info@bravo.az</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">www.bravo.az</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Mağazalarımız</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Əhmədli</a>

                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a href="#">20 Yanvar</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Koroğlu</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Gənclik Mall</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Park Azure</a>
                  </li>
                </ul>
              </div>
               </div>
            <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Haqqımızda</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Mağazalar Xəritəsi</a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Vakansiyalar</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Tərəfdaşlarımız</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Şərtlər və Qaydalar</a>
              </li>
            </ul>
          </div>
        </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <a className="footer-call-to-action-button button" href="#" target="_self"> <i className="fas fa-arrow-up"></i>
</a>
              </div>
        
            </div>
            <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z" />
              </svg>
              <a className="footer-social-link linkedin" href="#" target="_blank">
              
              </a>
              <a className="footer-social-link twitter" href="#" target="_blank">
               
              </a>
              <a className="footer-social-link youtube" href="#" target="_blank">
                
              </a>
              <a className="footer-social-link facebook" href="#" target="_blank">

              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="#" target="_self"> Copyright © 2023 Bravo</a>
              </p>
            </div>
          </div>
        </footer>
      </div>

       
  )
}

export default Footer


