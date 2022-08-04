import React, { useState } from 'react'

import Navbar from './components/Navbar';
import './home.css';
import bit_image from './assets/bitcoin.png';
import Cryptotable from './components/cryptotable/Cryptotable';


const Home = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleClick = event => {
    event.preventDefault();

    // 👇️ value of input field
    console.log('handleClick 👉️', message);
    return fetch('http://localhost:8080/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: message })
    }).then(res => {
      res.json()
      console.log(res)
    })
      .then(data => {

        return data
      })
  };
  return (
    <div className='home_main'>
      <Navbar />
      <div className='home section__padding' id="home">

        <div className='home_content'>
          <h1 className='gradient__text'>Buy and sell cryptocurrencies with Incrypto</h1>

          <div className='home_text'>
            <p className='text_journey'>Let the Journey begin! It's time to go</p>
            <p className='text_incrypto'>&nbsp;Incrypto</p>
          </div>

          <div className='header_input'>
            <form className='get_email' onSubmit={handleClick}>
              <input type="email" placeholder='your email address' onChange={handleChange}
              value={message} />
              <button type='submit'>Get Started</button>
            </form>
          </div>


        </div>
        <div className='home_image'>
          <img src={bit_image} alt='AI' />
        </div>
      </div>
      <Cryptotable />
    </div>

  )
}

export default Home