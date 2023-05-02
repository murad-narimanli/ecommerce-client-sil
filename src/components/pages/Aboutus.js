
import React, { useEffect, useState } from "react";
import "../../assets/scss/Aboutus.scss";
import Image from "../../assets/image/image";
import client from "../../api/api";
import Vision from "../elements/Vision";
import Mission from "../elements/Mission";
import Aboutstore from "./Aboutstore";

function Aboutus() {
  const [data, setData]=useState ({})
  useEffect(()=>{
   getdata()

  }, []);
  const getdata = async()=>{
    await client.get('title').then((res)=>{
      if(res.data.length){
        setData(res.data[0])
      }
    })
  }

  return (
    <div className="container about">
      <div className="header d-flex align-items-center justify-content-between">
        <div className="textb">
          {/* <h1>RİFAHINIZ</h1>
          <h1>MƏQSƏDİMİZDİR</h1>
          <h3>Hər Zaman Xidmətinizdəyik!</h3> */}
                  <div dangerouslySetInnerHTML={{ __html: data.title}} />

        </div>

        <img src={Image.ShoppingGif} />
      </div>

      <div className="d-flex aboutcard ">
        {/* <div className="about-container">
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="content">
              <div className="details">
                <h2>Viziyonumuz</h2>
                <p>
                  Şirkət olaraq viziyonumuz fəaliyyət göstərdiyimiz sahədə öz
                  effektivliyilə seçilən və yüksək iqtisadi göstəricilərə malik
                  olan lider şirkət olmaqdır.Oz əməkdaşlarının maddi , həmçinin
                  iş şəraitinin yaxşılaşdırılması sahəsində əməli işlər görür
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <Vision />
        {/* <div className="about-container">
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="content">
              <div className="details">
                <h2>Missiyamız</h2>
                <p>
                  Azərbaycan pərakəndə satış sektorunda daim gənc və inovativ
                  şirkət olaraq müştərilərə yüksək keyfiyyətli qida və
                  qeyri-qida məhsullarını sərfəli qiymətlə və peşəkar xidmətlə
                  təqdim edərək onların həyat rifahını qaldırırıq.
                </p>
              </div>
              
            </div>
          </div>
        </div> */}
        <Mission />
        {/* <div className="about-container">
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <i class="fa-solid fa-store"></i>
            </div>
            <div className="content">
              <div className="details">
                <h2>Haqqımızda</h2>
                <p>
                  2009-cu ildə yaranan "ANC GROUP" MMC-nin tərkibində fəaliyyət
                  göstərən "Bravo" supermarketlər şəbəkəsi və “Port Baku Bazar”
                  market hər zaman müştəri məmnuniyyətinin artırılması və xidmət
                  səviyyəsinin yaxşılaşdırılması üçün çalışır.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <Aboutstore />
      </div>
    </div>
  );
}

export default Aboutus;
