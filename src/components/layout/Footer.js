// import React from "react";

// function Footer() {
//   return (
//     <div className="footer-container">
//       <div className="footer-info">
//         <h2>Bravo</h2>
//         <p>+994 12 000 0000</p>
//         <p>+994 50 000 0000</p>
//         <p>info@bravo.az</p>
//         <p>www.bravo.az</p>
//       </div>
//       <div className="footer-links">
//         <h3>Mağazalarımız</h3>
//         <ul>
//           <li>Ahmedli</li>
//           <li>20 Yanvar</li>
//           <li>Koroglu</li>
//           <li>Ganjlik Mall</li>
//           <li>Park Azure</li>
//         </ul>
//       </div>
//       <div className="footer-links">
//         <h3>Haqqımızda</h3>
//         <ul>
//           <li>Vakansiyalar</li>
//           <li>Mağazalar Haritası</li>
//           <li>Tərəfdaşlarımız</li>
//           <li>Şərtlər və Qaydalar</li>
//         </ul>
//       </div>
//       <div className="footer-links">
//         <h3>Mobil Tətbiqətə Keçid</h3>
//         <button>Applicationa Keçid</button>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import Image from "../../assets/image/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function Footer() {
return (
<div className="container">
<div className="row">
<div className="col-md-3">
<div className="footer-info">
<img className="bravologo" src={Image.Bravologo} alt="" style={{ width: "200px" }} />
<div className="bravotext"style={{ margin: '18px' }}>
<p>+994 12 000 0000</p>
<p>+994 50 000 0000</p>
<p>info@bravo.az</p>
<p>www.bravo.az</p>
</div>
</div>
</div>
<div className="col-md-3">
<div className="footer-links">
<h3>Mağazalarımız</h3>
<ul style={{ listStyle: 'none', paddingLeft: '0' }}>
<li>Ahmedli</li>
<li>20 Yanvar</li>
<li>Koroglu</li>
<li>Ganjlik Mall</li>
<li>Park Azure</li>
</ul>
</div>
</div>
<div className="col-md-3">
<div className="footer-links">
<h3>Haqqımızda</h3>
<ul style={{ listStyle: 'none', paddingLeft: '0' }}>
<li>Vakansiyalar</li>
<li>Mağazalar Haritası</li>
<li>Tərəfdaşlarımız</li>
<li>Şərtlər və Qaydalar</li>
</ul>
</div>
</div>
<div className="col-md-3">
<div className="footer-links">
<h3>Mobil Tətbiqətə Keçid</h3>
<button className="application" onClick={() => window.open("https://apps.apple.com/us/app/bravo-supermarkets/id1427953617")}>
   
   <p className="download"> <FontAwesomeIcon icon={faApple} style={{ fontSize: '25px' }} /> Download on the</p><p> App Store</p>
</button>
</div>
</div>
</div>
</div>
);
}

export default Footer;
