import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer absolute-center'><span className='header-gradient'>
      This Blockchain <img className='block' src={require('../../assets/icons8-blockchain-new-logo-96.png')}/> Website By Pratyush singh</span></div>
  )
}

export default Footer;