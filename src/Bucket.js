import React from 'react'
import Navbar from './components/Navbar'

import './bucket.css'


const Bucket = () => {
  var objects = []
  return (
    <div className='bucket_main'>
      <Navbar />
      <div className='bucket_content'>
        <div className='popular'>
          <h1 className='heading1'>Popular Buckets</h1>

          <div className='pop_list'>
            <h1 className='title1'>title</h1>
            <div><p>hi</p></div>
          </div>

          <div className='pop_list'>
            <h1 className='title2'>title</h1>
            <div><p>hi</p></div>
          </div>

          <div className='pop_list'>
            <h1 className='title3'>title</h1>
            <div><p>hi</p></div>
          </div>

          <div className='pop_list'>
            <h1 className='title4'>title</h1>
            <div><p>hi</p></div>
          </div>

          <div className='pop_list'>
            <h1 className='title5'>title</h1>
            <div><p>hi</p></div>
          </div>

        </div>
        <tbody>
        {
    
  }
</tbody>
        <div className='create'>
            <h1 className='heading2'>Create your own Buckets</h1>

            <div className='create_tab'>
              <input type='text' placeholder = 'Enter Bucket title' />
              <input type='text' placeholder = 'coins' />
              {/* <select className='coin_select' id="coin_select" name="coins">
              </select> */}
             
          </div>
        </div>
      </div>
    </div>
  )
}
const Item=props=>{
  return (
    <h1>Heloooo</h1>
  )
}

export default Bucket