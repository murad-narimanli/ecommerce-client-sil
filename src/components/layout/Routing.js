import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Blog from "../pages/Blog";
import Contactus from "../pages/Contactus";
import Shop from "../pages/Shop";
import BlogDetail from "../pages/BlogDetail";
import WishList from "../elements/WishList";
import Basket from "../elements/Basket";
import Login from "../elements/Login";
import Registration from "../elements/Registration";
import Payment from "../elements/Payment";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="shop" element={<Shop />} />
      <Route path="blogdetail" element={<BlogDetail />} />
      <Route path="payment" element={<Payment />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="basket" element={<Basket />} />
    </Routes>
  );
};

export default Routing;
