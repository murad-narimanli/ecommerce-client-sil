import {Routes,Route} from "react-router-dom"
import Home from  "../pages/Home"
import Aboutus from "../pages/Aboutus"
import Blog from "../pages/Blog"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Contactus from "../pages/Contactus"
import Product from "../pages/Product"
import Shop from "../pages/Shop"

const Routing = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="aboutus" element={<Aboutus/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="contactus" element={<Contactus/>}/>
            <Route path="product" element={<Product/>}/>

            <Route path="shop" element={<Shop/>}/>
        </Routes>
       
    )
}

export default Routing