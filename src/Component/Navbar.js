import React from 'react'
import '../Style/Navbar.css'
import {logo} from '../Datas/data.json'
import {Link} from  "react-router-dom"
import search from '../Images/search.png'

function Navbar() {
  return (
    <div className='nav'>
     <div className='logo'>
         <Link to="/milogo">
             <img id ="logoImage" src={logo} alt ="mi"/>
         </Link>
         </div>
         <Link className='navlinks' to="/miphone">Mi Phones</Link>
         <Link className='navlinks' to="/redmiphone">Redmi Phones</Link>
         <Link className='navlinks' to="/tvphone">Tv Phones</Link>
         <Link className='navlinks' to="/laptop">Laptops</Link>
         <Link className='navlinks' to="/fitness">Fitness</Link>
         <Link className='navlinks' to="/home">Home</Link>
         <Link className='navlinks' to="/audio">Audio</Link>
         <Link className='navlinks' to="/accessories">Accessories</Link>

         <div className='searchbox'>
          <input type="text" name ="search" placeholder='search products'/>   
          <img src ={search}/> 
         </div>
  
    </div>
  )
}

export default Navbar