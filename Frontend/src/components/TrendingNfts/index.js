import React from 'react'
import './trendingNfts.css'
import Slider from 'react-slick/lib/slider'
import {TRENDING_NFTs} from '../../data/trendingNfts'
import TrendingCard from './TrendingCard/index';
import Button from '../../commons/Buttons';
import { useNavigate } from 'react-router-dom';

const settings={
  slidesToShow:3,
  slidesToScroll:1,
  infinite: true,
  autoPlay:true,
  speed:500,
  arrows:false,
};
const TrendingNfts = () => {
  const navigate=useNavigate();
  return (
    <div className='trending-nfts'>
      <div className='tn-title absolute-center'>
      <span className='header-gradient'>TRENDING SINGERS</span>
      </div>
      <div className='tn-bg-blob'></div>
      <Slider {...settings}>{TRENDING_NFTs.map((_nft)=>(
      <TrendingCard nft={_nft}/>
      ))}</Slider>
      <div className='tn-btn absolute-center'>
        <Button btnText="see more" type="PRIMARY" btnOnclick={()=>{navigate('/signup')}} customclass="seemore-btn"/>
      </div>
    </div>
    );
};

export default TrendingNfts;