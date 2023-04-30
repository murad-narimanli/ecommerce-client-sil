import React, { useEffect, useState } from "react";
import client from "../../api/api";



function Discount() {
  const [data, setData]=useState ({})

  useEffect(()=>{
    getdata()
 
   }, []);
   const getdata = async()=>{
     await client.get('discountnews').then((res)=>{
       if(res.data.length){
         setData(res.data[0])
       }
     })
   }
 
  return (
    <div className="p-3 discount mt-3">
      <span className="dicount_text">
      <div dangerouslySetInnerHTML={{ __html: data.discountnews}} />

      </span>
    </div>
  );
}

export default Discount;
