import React from 'react'
import '../Style/ProductReview.css'

function ProductReview({review}) {
  return (
    
    <div className='row mx-5 takeMargin pb-5' >
  <div className='col-md-6   '>
      <div className='card shadow'>  
      <div className='row p-0'><img src={review[0].image} alt="reviewImage" className='img-fluid w-100'/></div>
      <div className='row'><span>{review[0].review}</span></div>
      <div className='row'>
          <div className='col-4 pl-1'><span>{review[0].name}</span></div>
          <div className='col-8 pl-1'style={{color:"orangered"}}><p>{review[0].price}</p></div>
      </div>
      </div>
  </div>

  <div className='col-md-6'>
      <div className='card shadow'>
  <div className='row p-0'><img src={review[1].image} alt="reviewImage"  className='img-fluid w-100'/></div>
      <div className='row'><span>{review[1].review}</span></div>
      <div className='row'>
          <div className='col-6 pl-1'><span>{review[1].name}</span></div>
          <div className='col-6 pl-1' style={{color:"orangered"}}><p>{review[1].price}</p></div>
      </div>
  </div>
  </div>
    </div>

    


  )
}

export default ProductReview