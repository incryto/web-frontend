import React from 'react'
import Navbar from './components/Navbar'
import pop_img from './assets/create.png';
import './bucket.css'


const Bucket = () => {

  return (
    <div className='bucket_main'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <div className='bucket_content'>
        <div className='left_tab'>
          <div className='pop_image'>
            <img src={pop_img} alt='img' />
          </div>

          <div className='create_btn'>
            <a href = '/create'><button type='button'>
              Create your own bucket
            </button></a>
          </div>


        </div>
        <div className='popular'>
          <div className='popular_inner'>
            <h1 className='heading1'>Popular Buckets</h1>

            <div className='pop_list'>
              <h1 className='title1'>title</h1>
              <div className='pop_desc'><p>hi</p></div>
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

        </div>
      </div>
    </div>
  )
}
const Item = props => {
  return (
    <h1>Heloooo</h1>
  )
}

export default Bucket