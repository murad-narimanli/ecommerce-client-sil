import React from 'react'
import CarouselImage from '../elements/CarouselImage'
import CountdownClock from '../elements/Countdownclock'
import Submenucatalog from '../elements/Submenucatalog'
import "../../assets/scss/Home.scss"

import ConsultationRequest from "../elements/ConsultationRequest"

const Home=()=> {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'> 
<Submenucatalog />
        </div>
        <div className='col-md-6'>
          <CarouselImage />
        </div>

      
      <div className='col-md-3 col-12 countdown-container'>
        <CountdownClock />
      </div>
      </div>
      <ConsultationRequest />
    </div>
  
)
};

export default Home
