import React from 'react'
import '../Style/Musics.css'

function Musics({Song,SongMusic}) {
  return (
    <> 
    <div className='row mx-5'>
      <div className='col-sm-3 '><img src={Song} alt="coverImage" className='img-fluid w-100 d-block'/></div>
      <div className='col-sm-9 '>
       <div className='row'>

       <div className='col-sm-4 g-0'>
         <div className='card height'>
           <div className='row' ><img src={SongMusic[0].image} alt="coverImage1" className='img-fluid size'/></div>
           <div className='row p-0' style={{textAlign:"center"}}><span>{SongMusic[0].name}</span></div>
           <div className='row p-0' style={{textAlign:"center",color:"orangered"}}><p>{SongMusic[0].price}</p></div>
         </div>
       </div>

       <div className='col-sm-4 g-0'>
       <div className='card height'>
           <div className='row'><img src={SongMusic[1].image} alt="coverImage2" className='img-fluid size'/></div>
           <div className='row' style={{textAlign:"center"}}><span>{SongMusic[1].name}</span></div>
           <div className='row' style={{textAlign:"center" ,color:"orangered"}}><p>{SongMusic[1].price}</p></div>
         </div>
       </div>

       <div className='col-sm-4 g-0'>
       <div className='card height'>
           <div className='row'><img src={SongMusic[2].image} alt="coverImage3" className='img-fluid size'/></div>
           <div className='row' style={{textAlign:"center"}}><span>{SongMusic[2].name}</span></div>
           <div className='row' style={{textAlign:"center",color:"orangered"}}><p>{SongMusic[2].price}</p></div>
         </div>
       </div>

       </div>
       <div className='row mt-3'>
       <div className='col-sm-4 g-0'>
         <div className='card height'>
           <div className='row'><img src={SongMusic[3].image} alt="coverImage4" className='img-fluid size'/></div>
           <div className='row' style={{textAlign:"center"}}><span>{SongMusic[3].name}</span></div>
           <div className='row' style={{textAlign:"center",color:"orangered"}}><p>{SongMusic[3].price}</p></div>
         </div>
       </div>

       <div className='col-sm-4 g-0'>
       <div className='card height'>
           <div className='row'><img src={SongMusic[4].image} alt="coverImage5"className='img-fluid size'/></div>
           <div className='row' style={{textAlign:"center"}}><span>{SongMusic[4].name}</span></div>
           <div className='row' style={{textAlign:"center",color:"orangered"}}><p>{SongMusic[4].price}</p></div>
         </div>
       </div>

       <div className='col-sm-4 g-0'>
       <div className='card height' style={{textAlign:"center"}}>
          <p style={{margin:"auto" ,color:"orangered",fontSize:"40px",fontWeight:"400"}}> Browse <br/> more </p>
         </div>
       </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Musics