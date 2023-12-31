import React from 'react'
import '../Pages/Css/Login.css'
function LiginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Sign Up</h2>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Name'/>
          <input type="email"  placeholder='Email'/>
          <input type="password"  placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LiginSignup