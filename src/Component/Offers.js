import React from 'react'
import Offer from './Offer'
import '../Style/Offers.css'
function Offers({offer}) {
  return (
    <div className='row  mx-4 my-2 offerDesign'>
    {
     offer.map((item,index)=>(
         <Offer key={item.image} index={index} src={item.image} link={item.url} /> 
     ))
    }
    </div>
  )
     }


export default Offers