import React from 'react'
import { Carousel } from 'react-bootstrap'
function SliderEnd({ends}) {
  return (
    <div>

<Carousel>
         {
             ends.map((item,index)=>(
                <Carousel.Item key={item.image} interval={1000} keyboard={true}>
                 <img className='d-block w-100' src={item.image} alt ={`${index}image`}/>
                
                 <Carousel.Caption>
                     <h3>{item.name}</h3>
                     <p>{item.description}</p>
                     <p>{item.source}</p>
                     <u>read more</u>
                 </Carousel.Caption>


                </Carousel.Item>
             ))
         }
        </Carousel>
    </div>
  )
}

export default SliderEnd