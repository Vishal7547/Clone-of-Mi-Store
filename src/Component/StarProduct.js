import React from 'react'
import '../Style/StarProduct.css'

function StarProduct({product}) {
  return (

      <div className='row mx-5'>
      
          <div className='col-sm-6 g-0 effect'><a href={product[0].url}><img src={product[0].image} alt="image one" className='img-fluid'/></a></div>
          <div className='col-sm-6 g-0'>
              <div className='row'>
              <div className='col-sm-6 g-0 effect'><a href={product[1].url}><img src={product[1].image} alt="image two"  className='img-fluid'/></a></div>
              <div className='col-sm-6 g-0 effect'><a href={product[2].url}><img src={product[2].image} alt="image three"  className='img-fluid'/></a></div>
              </div>
              <div className='row my-1 '>
                  <div className='col-sm-12 effect'> 
              <a href={product[3].url}><img src={product[3].image} alt="image four"  className='img-fluid'/></a>
              </div>
                  </div>
          </div>
     </div>  
    
  )
}

export default StarProduct