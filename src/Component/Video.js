import React from 'react'

import Videos from './Videos'

function Video({player}) {
  return (
    <div className='row mx-4'>
        {
        player.map((item,index)=>(
          <Videos key={item.image} src={item.image} name={item.name} index={index}/>
        ))
}
    </div>
  )
}

export default Video