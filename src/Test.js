import React from 'react'
import Navbar from './components/Navbar'
import './test.css'

import {Divider} from 'semantic-ui-react'

const Test = () => {
    return (
        <div className='buck_main'>
            <Navbar />
            <div className='buck_content'>
                <div className='bucket_list'>
        
                </div>
                <Divider horizontal className='divider'>
                    <p className='or_p'>OR</p>
                </Divider>
                <div className='crt_btn'>
                    <a href='/testcreate'><button>Create Your Own Bucket</button></a>
                </div>

            </div>

        </div>
    )
}

export default Test