import React, {useState} from 'react'
import './signin.css'
import {Button } from 'semantic-ui-react'

async function loginuser(email) {

    console.log(email)
    return fetch('http://192.168.1.98:8080/v1/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email})
    }).then(res=> { res.json()})
    .then(data => {return data})
}


const Signin = () => {

    const [email, setemail] = useState()

    async function handlesubmit(e) {
        e.preventDefault()
        console.log('hi')
        console.log(email)
        const res = await loginuser(email)
        console.log(res)
    }

    return (
        <div className='sign_main'>
            <div className='up_modal'>
                <form onSubmit={handlesubmit}>
                    <div className='up_input'>
                        <label >Email</label>
                        <br></br>
                        <br></br>
                        <input type='email' onChange={e => {setemail(e.target.value)}}></input>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='up_btn'>
                        <Button  negative>Cancel</Button>
                        <button className='proc_btn' type='submit' >Proceed</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signin