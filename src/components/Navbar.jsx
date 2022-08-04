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

    const [isSigned,setIsSigned] = useState(false)
    useEffect(() => {
      init()
    });
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

            <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Log In/Sign Up</Modal.Header>
                <div className='up_modal'>
                    <form onSubmit={handlesubmit}>
                        <div className='up_input'>
                            <label >Email</label>
                            <input type='email' onChange={e => setemail(e.target.value)}></input>
                            <button type='submit'>Get Otp</button></div></form>
                    <form onSubmit={handleotp}><div>
                        <br></br>
                        <label>Otp</label>
                        <input type='text' onChange={e => setotp(e.target.value)}></input>
                        <button type='submit'>Verify Otp</button>
                    </div>
                        {/* <input className='ema' type='email'></input>
                        <button type='submit'>Verify</button> */}
                        <br></br>
                        <br></br>
                        <div className='up_btn'>
                            <Button onClick={() => setFirstOpen(false)} negative>Cancel</Button>
                            <button className='proc_btn' onClick={() => { setFirstOpen(false); setThirdOpen(true) }}>Proceed</button>
                        </div>
                        {/* <Button  type = 'submit' onClick={() => { setSecondOpen(true); setFirstOpen(false); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button> */}

                    </form>
                </div>
                {/* <Modal.Actions>
                    <Button onClick={() => setFirstOpen(false)} negative>Cancel</Button>
                    <Button onClick={() => { setSecondOpen(true); setFirstOpen(false); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions> */}

            </Modal>

            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='small'
            >
                <Modal.Header>OTP Verification</Modal.Header>
                <div className='otp_modal'>
                    <div className='otp_input'>
                        <label >Enter Otp</label>
                        <input type='text'></input>
                    </div>
                    <button type='submit'>Verify</button>

                </div>
                <Modal.Actions>
                    <Button onClick={() => { setSecondOpen(false); setThirdOpen(true); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>

            <Modal
                onClose={() => setThirdOpen(false)}
                open={thirdOpen}>


                <div className='info_modal'>
                    <Form>
                        <Form.Group unstackable widths={2}>
                            <Form.Input label='First name' placeholder='First name' />
                            <Form.Input label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Phone' placeholder='Phone' />
                        </Form.Group>
                    </Form>
                    <br></br>
                    <div className='s_btn'>
                        <button type='submit' >SAVE</button>
                    </div>


                </div>


                <Modal.Actions>
                    <Button onClick={() => { setSecondOpen(false); setFirstOpen(false); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
            <div className="navbar">
                <div className='nav_links'>
                    <div className='nav_logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='nav_links_container'>
                        <p><a href="/">Home</a></p>

                        {isSigned?<p><a href="/bucket">Buckets</a></p>:<></>}
                    </div>
                </div>
                <div className='nav_sign'>
                    {!isSigned
                        ? <><p>Sign in</p>
                            <button type='button' onClick={() => setFirstOpen(true)}>Sign up</button>
                            {/* <Popup trigger=  {false}>
                <h1>clearly</h1>
                </Popup> */}

                        </>
                        : <p>profile</p>
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar 