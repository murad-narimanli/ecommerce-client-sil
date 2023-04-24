import React, { useEffect, useState } from "react";
import "../../assets/scss/Aboutus.scss";
import client from "../../api/api";

function Vision() {
  const [data, setData]=useState ({})
  useEffect(()=>{
   getdata()

  }, []);
  const getdata = async()=>{
    await client.get('vision').then((res)=>{
      if(res.data.length){
        setData(res.data[0])
      }
    })
  }

  return (
   

        <div className="about-container">
          <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="content">
              <div className="details">
                <h2>Viziyonumuz</h2>
                {/* <p>
                  Şirkət olaraq viziyonumuz fəaliyyət göstərdiyimiz sahədə öz
                  effektivliyilə seçilən və yüksək iqtisadi göstəricilərə malik
                  olan lider şirkət olmaqdır.Oz əməkdaşlarının maddi , həmçinin
                  iş şəraitinin yaxşılaşdırılması sahəsində əməli işlər görür

                </p> */}
<div>
    <p>
    <div dangerouslySetInnerHTML={{ __html: data.vision}} />

    </p>
</div>
              </div>
            </div>
          </div>
        </div>
       
     
  );
}

export default Vision;
