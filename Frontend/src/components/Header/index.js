import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header=()=>{  
  // const hanleforRoute=()=>{
  //   navigate('/home');
  // }
    return(
      <nav className='navbar'>
      <div className='logo-div'>
        <NavLink to='/' style={{color:'white', textDecoration:'none'}}>TopBand</NavLink>
      </div>
      <div className='navbar-list'>
        <ul>
          <li><NavLink to='/' style={{color:'white', textDecoration:'none'}}>Home</NavLink></li>
          <li><NavLink to='/about' style={{color:'white', textDecoration:'none'}}>About</NavLink></li>
          <li><NavLink to='/contact' style={{color:'white', textDecoration:'none'}}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    )
}
export default Header;