import {Routes,Route} from "react-router-dom"
import Home from  "../pages/Home"
import Aboutus from "../pages/Aboutus"
import Blog from "../pages/Blog"
import Contactus from "../pages/Contactus"
import Shop from "../pages/Shop"
import BlogDetail from "../pages/BlogDetail"
const Routing = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="aboutus" element={<Aboutus/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contactus" element={<Contactus/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="blogdetail" element={<BlogDetail/>}/>
        </Routes>
       
    )
}

export default Routing