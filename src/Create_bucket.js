import React from 'react'
import Navbar from './components/Navbar'
import create_img from './assets/create.png';


import { Dropdown } from 'semantic-ui-react'
import './create.css'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
]

const Create_bucket = () => {
  return (
    <div className='create_main'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <div className='create_content'>
        <div className='left_tab'>
          <div className='create_img'>
            <img src={create_img} alt='img' />
          </div>

          <div className='pop_btn'>
            <a href='/bucket'><h2>adfdsf</h2></a>
          </div>
        </div>

        <div className='create_form'>
          <div className='create_inner'>
            <h1 className='head'>Create your own Bucket</h1>
            <form>
              <div className='input_set'>
                <div className='input_title'><h2>Title</h2></div><div className='input_div'><input type='text' placeholder='Enter your title' /></div></div>

              <div className='input_set'>
                <div className='input_title'><h2>Descr</h2></div><div className='input_div'><input type='text' /></div></div>

              <div className='input_set'>
                <div className='input_title'><h2>Coins</h2></div><div className='input_div'><Dropdown

                  placeholder='Choose coin'
                  fluid
                  selection
                  options={friendOptions}
                /></div></div>

              <div className='input_set'>
                <div className='input_title'><h2>Coins</h2></div><div className='input_div'><Dropdown

                  placeholder='Choose coin'
                  fluid
                  selection
                  options={friendOptions}
                /></div></div>

              <div className='input_set'>
                <div className='input_title'><h2>Coins</h2></div><div className='input_div'><Dropdown

                  placeholder='Choose coin'
                  fluid
                  selection
                  options={friendOptions}
                /></div></div>


              <div className='save'><button className='save_btn'>SAVE</button></div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Create_bucket