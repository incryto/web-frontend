import React from 'react'
import Navbar from './components/Navbar';
import './home.css';
import bit_image from './assets/bitcoin.png';
import login_svg from './assets/Login-rafiki.svg'
import Cryptotable from './components/cryptotable/Cryptotable';

const Home = () => {
  return (
    <div className='home_main'>
    <Navbar />
    {/* <Signin/> */}
      <OtpVerification/>
    {/* <Cryptotable/> */}
  </div>

  )
}

const Signin = () =>{
  return (
    <div className='home section__padding' id = "home">
      
      <div className='home_content'>
        <h1 className='gradient__text'>Buy and sell cryptocurrencies with Incrypto</h1>
        
        <div className='home_text'>
          <p className='text_journey'>Let the Journey begin! It's time to go</p> 
          <p className='text_incrypto'>&nbsp;Incrypto</p>
        </div>

        <div className='header_input'>
          <input type="email" placeholder='your email address'/>
          <button type='button'>Get Started</button>
        </div>


      </div>
      <div className='home_image'>
          <img src={bit_image} alt = 'AI' />
      </div>
    </div>
  )
}

const OtpVerification = () =>{

  return (
    <div className='home section__padding' id = "home">
      
      <div className='home_content'>
        <h1 className='gradient__text'>Get verified using your otp</h1>
        
        <div className='home_text'>
          <p className='text_journey'>check your email to get </p> 
          <p className='text_incrypto'>&nbsp;OTP</p>
        </div>

        <div className='header_input'>
          <input type="email" placeholder='your email address'/>
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='home_image'>
      <img src={login_svg} alt = 'AI' />
      </div>
    </div>
  )
}
export default Home