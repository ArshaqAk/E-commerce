import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsLetter shadow'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsLetter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter