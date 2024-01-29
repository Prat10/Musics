import React from 'react'
import './InfoSection.css'
import {INFO_ITEMS} from '../../data/infoitem'
import InfoItem from './infoitem'
const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='is-heading absolute-center'>
        <span className='header-gradient'>Create and Sell your NFTS</span>
      </div>
      <div className='is-item-container'>
        {INFO_ITEMS.map((_infoitems)=>(
          <InfoItem item={_infoitems}/>
        ))}
      </div>
    </div>
  )
}
export default InfoSection;