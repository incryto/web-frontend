import React from 'react'
import Navbar from './components/Navbar';
import './home.css';
import bit_image from './assets/bitcoin.png';
import Cryptotable from './components/cryptotable/Cryptotable';

const Home = () => {
  return (
    <div className='home_main'>
    <Navbar />
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
    <Cryptotable/>
  </div>

  )
}

export default Home