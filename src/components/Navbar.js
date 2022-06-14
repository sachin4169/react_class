import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav_header'>
        <div className='nav_logo'>
          <img src='./images/ced-new-logo.png' alt='' />
        </div>
        <div className='nav_logo_text'>
          <p>Developer</p>
        </div>

      </div>

      <div className='menu_list'>
        <div className='menu'>
          <NavLink className="link" to='/'>Game</NavLink>
    
          <NavLink className="link" to='/form'>Form</NavLink>
       
          <NavLink className="link" to='/text'>Text</NavLink>
         
          <NavLink className="link" to='/number'>NumberToString</NavLink>
        </div>
        <div className='nav_footer'>
          <p>copyright @ 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar