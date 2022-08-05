import React from 'react'
import Navbar from './components/Navbar'
import './bucket.css'

import Bucket_card from './components/bucket_card'
import {Divider} from 'semantic-ui-react'

const Bucket = () => {
    return (
        <div className='buck_main'>
            <Navbar />
            <div className='buck_content'>
                <div className='bucket_list_box'>
                <Bucket_card price = '500'/>
                <Bucket_card price = '45'/>
                </div>
                <Divider horizontal className='divider'>
                    <p className='or_p'>OR</p>
                </Divider>
                <div className='crt_btn'>
                    <a href='/create'><button>Create Your Own Bucket</button></a>
                </div>

            </div>

        </div>
    )
}

export default Bucket