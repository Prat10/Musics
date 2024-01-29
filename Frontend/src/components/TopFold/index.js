import React from 'react';
import Button from '../../commons/Buttons';
import './TopFold.css';
import Diamond2 from '../../assets/DiamondImage2.gif';
import Diamond4 from '../../assets/Diamond4.gif';
import Diamond5 from '../../assets/Diamond5.gif';
import { useNavigate } from 'react-router-dom';

const TopFold=()=>{  
    const navigate = useNavigate();
    const handlertosign=()=>{
        navigate('/signup')
    }
    return(
   <div className='topfold absolute-center'>
    <div className='tf-left'>
        <div className='tf-heading'>Find<span className='header-gradient'> Artists and Musicians </span> Bars </div>
        <div className='tf-description'>
        TopBand is the easiest way for you to book a great Artist for your event. Start by telling us about your event, and get prices from the bars in your area.
        </div>
        <div className='tf-left-btns'>
         <Button btnType="PRIMARY" btnText="as Artist" btnOnclick={handlertosign}/>
         <Button btnType="SECONDARY" btnText="As Bar" customclass='tf-left-secondary-btn'/>
        </div>
        <div className='tf-left-infoStats'>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>200k+</div>
                <div className='tf-infoItem-label'>Collections</div>
            </div>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>10k+</div>
                <div className='tf-infoItem-label'>Artists</div>
            </div>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>423k+</div>
                <div className='tf-infoItem-label'>Community</div>
            </div>
        </div>
    </div>
    <div className='tf-right'>
        <div className='tf-right-bg-blob'></div>
        <div className='tf-right-diamond'>
            <div className='tf-r-diamond-item absolute-center'>
                <img style={{width:'220px'}} 
                src="https://i.pinimg.com/originals/5d/8b/e6/5d8be68175bb83b6b415d0d65171f3ae.gif"
                alt='diamond-banner'/>
            </div>
            <div className='tf-r-diamond-item absolute-center'>
                <img style={{width:'280px'}}  
                src={Diamond5}
                alt='diamond-banner'/>
            </div>
            <div className='tf-r-diamond-item absolute-center'>
                <img style={{width:'300px'}}
                src={Diamond2}
                alt='diamond-banner'/>
            </div>
            <div className='tf-r-diamond-item absolute-center'>
                <img style={{width:'220px'}}
                src={Diamond4}
                alt='diamond-banner'/>
            </div>
        </div>
    </div>
   </div>
    )
}
export default TopFold;