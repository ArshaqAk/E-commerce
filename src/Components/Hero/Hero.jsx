import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import home_img from '../Assets/home_img.png'

function Hero() {
  return (
    <div className='hero shadow mx-3 g-0'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
        <div>
        <div className="hero-hand-icon">
            <p className='para'>new</p>
            {/* <img src={hand_icon} alt="" /> */}
        </div>
        <p className='para'>collection</p>
        <p className='para'>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>

        <div className="hero-right">
            <img width={'330px'}  src={home_img} alt="" />
        </div>
    </div>
  )
}

export default Hero