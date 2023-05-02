// import React from "react";
// import "../../assets/scss/Header.scss";
// import Menu from "../elements/Menu";
// import Image from "../../assets/image/image";
// import Searchnav from "../elements/Searchbar";
// import { BsHeartFill } from "react-icons/bs";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   const registration = () => {
//     navigate("/registration");
//   };

//   const wishList = () => {
//     navigate("/wishlist");
//   };

//   const basket = () => {
//     navigate("/basket");
//   };

//   const login = () => {
//     navigate("/login");
//   };

//   return (
//     <div>
//       <div className="header">
//         <div className="container ">
//           <nav className="d-flex justify-content-between align-items-center navheader">
//             <div>
//               <img
//                 className="bravologo mt-4"
//                 src={Image.Bravologo}
//                 alt=""
//                 style={{ width: "200px" }}
//               />
//             </div>
//             <div></div>
//             <div className="d-flex button-container">
//               <Searchnav />
//               <button onClick={login}> Daxil ol </button>
//               <button onClick={registration}>Qeydiyyatdan keç</button>
//               <button onClick={wishList} className="wishList">
//                 {" "}
//                 <BsHeartFill />{" "}
//               </button>
//               <button onClick={basket} className="shoppingCard">
//                 {" "}
//                 <AiOutlineShoppingCart />{" "}
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>
//       <Menu />
//     </div>
//   );
// };

// export default Header;
import React,{useState}from "react";
import "../../assets/scss/Header.scss";
import Menu from "../elements/Menu";
import Image from "../../assets/image/image";
import Searchnav from "../elements/Searchbar";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleRegistration = () => {
    navigate("/registration");
  };

  const handleWishList = () => {
    navigate("/wishlist");
  };

  const handleBasket = () => {
    navigate("/basket");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <div className="header">
        <div className="container ">
          <nav className="d-flex justify-content-between align-items-center navheader">
            <div>
              <img
                className="bravologo mt-4"
                src={Image.Bravologo}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
            <div></div>
            <div className="d-flex button-container">
              <Searchnav />
              {user ? (
                <div className="user-container">
                  <span>Salam, {user.username}</span>
                  <button onClick={handleLogout}>Çıxış</button>
                </div>
              ) : (
                <>
                  <button onClick={handleLogin}>Daxil ol</button>
                  <button onClick={handleRegistration}>Qeydiyyatdan keç</button>
                </>
              )}
              <button onClick={handleWishList} className="wishList">
                <BsHeartFill />
              </button>
              <button onClick={handleBasket} className="shoppingCard">
                <AiOutlineShoppingCart />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
