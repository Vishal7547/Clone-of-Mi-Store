import React from 'react'
import '../Style/Heading.css'

function Heading({heading}) {
  return (
    <div className=' headDeasign' >
        <div></div>
        <p>{heading}</p>
        <div></div>
    </div>
  )
}

export default Heading