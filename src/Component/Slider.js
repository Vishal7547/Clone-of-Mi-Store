import React from 'react'
import { Carousel } from 'react-bootstrap'


function Slider({start}) {
  return (
    <div>
        <Carousel>
         {
             start.map((item,index)=>(
                <Carousel.Item>
                 <img className='d-block w-100' src={item} alt ={`${index}image`}/>
                </Carousel.Item>
             ))
         }
        </Carousel>
    </div>
  )
}

export default Slider