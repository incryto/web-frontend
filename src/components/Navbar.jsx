import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Input, TextArea, Select, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import './navbar.css'
import logo from '../assets/midhun.png';
// import { CgProfile } from 'react-icons/cg';


async function loginuser(email) {
    return fetch('http://localhost:8080/v1/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    }).then(res => { res.json() })
        .then(data => { return data })
}

async function Userotp(email, otp) {

    console.log(otp)
    axios.post('http://localhost:8080/v1/otp/verify', {
        email: email,
        otp: otp
    })
        .then(function (data) {
            console.log(data);
            if (data.data.response_code === 200) {
                localStorage.setItem('items', JSON.stringify(data.data.response.token));
                return data.data.response.completion


            }
            else {
                alert(data.data.message)
                console.log(localStorage.getItem('items'))


            }
        })
        .catch(function (error) {
            console.log(error);
        });

}
const Navbar = () => {
    let nav = useNavigate()

    const [email, setemail] = useState()
    const [otp, setotp] = useState()
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [thirdOpen, setThirdOpen] = useState(false)
    const [profilePage,setProfilePage] = useState(false)
    const [isSigned,setIsSigned] = useState(false)
    useEffect(() => {
      init()
    },[1]);
    async function init() {
       const token =   localStorage.getItem('token')
       console.log(token)
       if(token!=null){
        console.log("user already signed in")
        setIsSigned(true)
       }
    }
  


    async function handlesubmit(e) {
        e.preventDefault()
        const res = await loginuser(email)
        console.log(res)
        if (res.code == 200) {
            setSecondOpen(true)
            setFirstOpen(false)
        }
    }

    async function handleotp(e) {
        e.preventDefault()
        console.log(otp)
        const data = await Userotp(email, otp)
        console.log(data)
        if (data == 1) {
            console.log("Jopi")
        }
        else {
            console.log("Nava");
            nav('/signin')
        }

    }

    const [signcheck, setsign] = useState(true);
    return (
        <>

           
            <div className="navbar">
                <div className='nav_links'>
                    <div className='nav_logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='nav_links_container'>
                        <p><a href="/">Home</a></p>

                        {isSigned?<p><a href="/bucket">Buckets</a></p>:<></>}
                        {isSigned?<p><a href="/create">Create bucket</a></p>:<></>}
                    </div>
                </div>
                <div className='nav_sign'>
                    {!isSigned
                        ? <><p>Sign in</p>
                            <button type='button' onClick={() => setFirstOpen(true) }>Sign up</button>
                           
                        </>

                        :  <><p><a href="/profile">Profile</a></p>
                            <button type='button' onClick={()=>{
                                localStorage.removeItem('token')
                            }}><a href="/">logout</a></button></>
                           
                    
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar 