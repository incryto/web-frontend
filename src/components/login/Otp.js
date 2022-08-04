import React, { useState } from 'react'
import { Button, Modal, Form, Input, TextArea, Select, Icon } from 'semantic-ui-react'

import Navbar from '../Navbar'
import './otp.css'
import axios from 'axios'

const Otp = () => {

    const [firstOpen, setFirstOpen] = useState(true)
    const [secondOpen, setSecondOpen] = useState(false)
    const [thirdOpen, setThirdOpen] = useState(false)


    return (
        <div className='otp_main'>
            <Navbar />

            <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Log In/Sign Up</Modal.Header>
                <div className='up_modal'>

                    <form>
                        <div className='otp'>  {/*onSubmit={handleotp}*/}
                            <label>Otp</label><br></br>
                            <input type='text' ></input>{/*onChange={e => setotp(e.target.value)}*/}
                            <br></br>
                            <button type='submit'>Verify Otp</button>
                        </div>


                        <div className='up_btn'>
                            <Button onClick={() => setFirstOpen(false)} negative>Cancel</Button>
                            <button className='proc_btn' onClick={() => { setFirstOpen(false); setThirdOpen(true) }}>Proceed</button>
                        </div>


                    </form>
                </div>


            </Modal>

        </div>
    )
}

export default Otp