import React from 'react'

function Offer({src,link,index}) {
  return (
    <>
    <div className='col-sm-4'>  
    <a href={link}><img src={src} alt={`${index}offer`} className="img-fluid"/></a>
    </div>  
    </>
  )
}

export default Offer