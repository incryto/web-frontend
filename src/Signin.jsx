import React, {useState} from 'react'
import axios from 'axios'

import { Button, Modal, Form, Input, TextArea, Select, Icon } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import './signin.css'

async function userinfo(fname,lname,phone){
    axios.post('http://localhost:8080/v1/profile/step-one', {
        fname: fname,
        lname:lname,
        phone:phone
        
      })
      .then(function (data) {
        console.log(data);
        if(data.data.response_code === 200){
            localStorage.setItem('items', JSON.stringify(data.data.response.token));
            return data.data.response.completion
            
            
        }
        else{
            alert(data.data.message)
            console.log(localStorage.getItem('items'))
            
            
        }
      })
      .catch(function (error) {
        console.log(error);
      });

}

const Test = () => {

    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [phone, setphone] = useState()

    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)
    const [thirdOpen, setThirdOpen] = React.useState(true)

    async function handleinfo(e){
        e.preventDefault()
        const data = await userinfo(fname,lname,phone)
    }

    return (
        <>
            <Navbar />

            <Modal
                onClose={() => setThirdOpen(false)}
                open={thirdOpen}>


                <div className='info_modal'>
                    <Form onSubmit={handleinfo}>
                        <Form.Group unstackable widths={2}>
                            <Form.Input label='First name' placeholder='First name' onChange={e => setfname(e.target.value)}/>
                            <Form.Input label='Last name' placeholder='Last name' onChange={e => setlname(e.target.value)} />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Phone' placeholder='Phone' onChange={e => setphone(e.target.value)} />
                        </Form.Group>

                        <br></br>
                        <div className='s_btn'>
                            <button type='submit' >SAVE</button>
                        </div>
                    </Form>
                </div>

                <Modal.Actions>
                    <Button onClick={() => { setSecondOpen(false); setFirstOpen(false); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default Test