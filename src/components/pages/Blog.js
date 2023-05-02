// import React from "react";
// import { Card } from "antd";
// import "../../assets/scss/Blog.scss";
// import Image from "../../assets/image/image";
// import { useNavigate } from "react-router-dom";
// const { Meta } = Card;
// function Blog() {
//   const image = "";
//   const title = "Üzünüzə qulluq edin";
//   const date = "01/01/2023";
//   const text =
//     "Mövsüm fərqi olmadan özümüzə və üzümüzə qulluq etmək mütləqdir. Yayda günəş şüalarının faydaları olsa da, düzgün saatlarda günəşlənməsək zərərli tərəfləri ilə qarşılaşarıq....";
//   let navigate = useNavigate();
//   return (
//     <div className="container d-flex justify-content-center mb-5 mt-5">
//       <Card
//         hoverable
//         style={{ width: "60%" }}
//         cover={<img alt={title} src={Image.Blogimg0} />}
//       >
//         <Meta title={title} className="pb-3" />
//         <p className="blog-date">{date}</p>
//         <p>{text}</p>
//         <a
//           className="blog_btn"
//           onClick={() => {
//             navigate("/blogdetail");
//           }}
//         >
//           Daha ətraflı
//         </a>
//       </Card>
//     </div>
//   );
// }

// export default Blog;
import React, { useEffect, useState } from "react";

import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import client from "../../api/api";

const { Meta } = Card;

function Blog() {
  const navigate = useNavigate();
  const [data, setData]=useState ({})

  useEffect(()=>{
    getdata()
 
   }, []);
   const getdata = async()=>{
     await client.get('blog').then((res)=>{
       if(res.data.length){
         setData(res.data[0])
       }
     })
   }

  return (
    <div className="container d-flex justify-content-center mb-5 mt-5">
  
      <Card
        hoverable
        style={{ width: "60%" }}
        cover={<img alt={data.title} src={data.image} />}
      >
        <Meta title={data.title} className="pb-3" />
        <p className="blog-date">{data.date}</p>
        <p>{data.text}</p>
        <a
          className="blog_btn"
          onClick={() => {
            navigate("/blogdetail");
          }}
        >
          Daha ətraflı
        </a>
      </Card>
  
    </div>
  );
}

export default Blog;
