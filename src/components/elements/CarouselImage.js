import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import client from "../../api/api";


function CarouselImage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await client.get("sliderimages");
      if (res.data.length) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-100 carouselresp">
      <Carousel autoplay>
        <div>
          <img
            src={data[0]?.image}
            alt={data[0]?.id}
            className="w-100" />
        </div>
        <div>
          <img
            src={data[1]?.image}
            alt={data[1]?.id} 
            className="w-100"/>
        </div>
        <div>
          <img
            src={data[2]?.image}
            alt={data[2]?.id}
             className="w-100" />
        </div>
       </Carousel>
       </div>
  )
};
    

  export default CarouselImage;
