import React, {useState} from 'react'
import './navbar.css'
import logo from '../assets/logo.png';
import { CgProfile } from 'react-icons/cg';


import Popup from './Popup';

const Navbar = () => {

    const [signcheck, setsign] =useState(true);
    return (
    <div className="navbar">
        <div className='nav_links'>
            <div className='nav_logo'>
                <img src = {logo} alt = "logo" />
            </div>
            <div className='nav_links_container'>
                <p><a href ="/">Home</a></p>
                <p><a href ="bucket">Buckets</a></p>
            </div>
        </div>
        <div className='nav_sign'>
            {signcheck
            ?   <><p>Sign in</p>
                {/* <button type='button' >Sign up</button> */}
                <Popup />
                </>
            : <><a href='/profile'><CgProfile color='#fff' size={32} /></a></>
            };
        </div>
    </div> 
    
    
  )
}

export default Navbar 