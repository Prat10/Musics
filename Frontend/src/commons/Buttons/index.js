import React from 'react'
import './Button.css'
const Button = (props) => {

const {btnType,btnText,btnOnclick,customclass}=props;
console.log(btnOnclick);
  return (
    <div className={`${
        btnType ==='PRIMARY' ? `button primary-btn ${customclass}`
        : `button secondary-btn ${customclass}`
    }`}
     onClick={btnOnclick}>
      {btnText}
    </div>
  )
}

export default Button