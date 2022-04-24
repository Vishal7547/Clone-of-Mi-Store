import React from 'react'
import '../Style/PreNavbar.css'
import cart from '../Images/cart.png'
import { Navbar,Nav ,NavDropdown} from 'react-bootstrap';

function PreNavbar() {
  return (
      <>
 <Navbar collapseOnSelect expand="lg" className='color' variant="dark">
  <div className='topSize'>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="" className='hover'>XIAOMI INDIA</Nav.Link> <span id="stick"> | </span>
      <Nav.Link href="">GET MI STORE APP</Nav.Link>  <span id="stick"> | </span>
      <Nav.Link href="">ONLINE HELP</Nav.Link>  <span id="stick"> | </span>
      <Nav.Link href="">RETAIL STORE</Nav.Link>  <span id="stick"> | </span>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">MI HOME</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">MI STORE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">MI AUTHORIZRD STORES</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">SIGN IN</Nav.Link>  <span id="stick"> | </span>
      <Nav.Link href="#deets">SIGN UP</Nav.Link>  <span id="stick"> | </span>
      <Nav.Link  href="#memes"><img src={cart} alt="" style={{width:"30px",height:"20px",marginRight:"5px"}} className="colorFill"/> 
      CART (0) 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
    </>
  )
}

export default PreNavbar