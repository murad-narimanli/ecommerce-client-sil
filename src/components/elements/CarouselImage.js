import React from 'react'
import { Carousel } from 'antd';
import Image from '../../assets/image/image';
function CarouselImage() {
  return (
    <div className='container'>
       <Carousel className='w-50'>
      <div>
        <img src={Image.Carousel3} alt="carousel-img"  className='w-100'/>
      </div>
      <div>
        <img src={Image.Carousel2} alt="carousel-img" className='w-100' />
      </div>
      <div>
        <img src={Image.Carousel1} alt="carousel-img"className='w-100' />
      </div>
    </Carousel>
    </div>
  )
}

export default CarouselImage;
