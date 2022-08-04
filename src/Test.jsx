import React from 'react'
import { Button, Modal, Form, Input, TextArea, Select, Icon } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import './test.css'

const Test = () => {

    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)
    const [thirdOpen, setThirdOpen] = React.useState(true)
    return (
        <>
            <Navbar />
            {/* <Button onClick={() => setFirstOpen(true)}>Open first Modal</Button>

            <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Modal #1</Modal.Header>
                <div className='up_modal'>
                    <Form>
                        <Form.Field
                            id='form-input-control-error-email'
                            control={Input}
                            label='Email'
                            placeholder='joe@schmoe.com'
                            // error={{
                            //     content: 'Please enter a valid email address',
                            //     pointing: 'below',
                            // }}
                        />
                    </Form>
                </div>
                <Modal.Actions>
                    <Button onClick={() => setFirstOpen(false)} negative>Cancel</Button>
                    <Button onClick={() => { setSecondOpen(true); setFirstOpen(false); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>

            </Modal>
            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='small'
            >
                <Modal.Header>OTP Verification</Modal.Header>
                <div className='otp_modal'>

                </div>
                <Modal.Actions>
                    <Button onClick={() => { setSecondOpen(false); setThirdOpen(true); }} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal> */}


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
        </>
    )
}

export default Test