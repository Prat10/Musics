import React from 'react'
import './infoitem.css'
// id:1,
// icon:"https://iconscout.com/3d/wallet-4000068",
// section_detail:"Set up your Wallet",
// description
const InfoItem = (props) => {
   const {item}=props;
  return (
    <div className='info-item absolute-center'>
        <img className='ii-icon' alt={item.section_detail} src={item.icon}/>
        <div className='ii-title'>{item.section_detail}</div>
        <div className='ii-description'>{item.description}</div>
    </div>
  )
}

export default InfoItem;