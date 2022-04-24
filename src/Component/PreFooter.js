import React from 'react'
import '../Style/PreFooter.css'
import recycle from '../Images/recycle.png'

function PreFooter() {
    const secure=<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  </svg>;
  const network =<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
</svg>;
  return (
    <>
    <div className='row mx-4 my-1 ' style={{opacity:"0.4"}}>
        <div className='col-sm-4 p-3'>

         <div className='row opacity'>
             <div className='col-3' style={{textAlign:"end"}}>
                 <img src={recycle} alt="recycle" style={{width:"50px",height:"50px"}}/>
             </div>
             <div className='col-9'>
                 <div className='row' style={{textAlign:"start"}}><b>Hassle free-replacement</b></div>
                 <div className='row' style={{textAlign:"start"}}><b>10 day easy replacement policy on mi.com</b></div>
             </div>
         </div>

        </div>

        <div className='col-sm-4 p-3'>
         
        <div className='row opacity'>
             <div className='col-3' style={{textAlign:"end"}}>
                 <p>{secure}</p>
             </div>
             <div className='col-9'>
                 <div className='row' style={{textAlign:"start"}}><b>100% secure payment</b></div>
                 <div className='row' style={{textAlign:"start"}}><b>WE support Cards,Wallet,EMI and COD</b></div>
             </div>
         </div>

        </div>

        <div className='col-sm-4 p-3'>

        <div className='row opacity'>
             <div className='col-3' style={{textAlign:"end"}}>
                 <p>{network}</p>
             </div>
             <div className='col-9'>
                 <div className='row' style={{textAlign:"start"}}><b>Vast service network</b></div>
                 <div className='row' style={{textAlign:"start"}}><b>1000 Mi service center across 600 cities</b></div>
             </div>
         </div>

        </div>

    </div>

    </>
  )
}

export default PreFooter