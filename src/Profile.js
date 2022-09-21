import React from 'react'
import './profile.css';
// import Profilenavbar from './components/Profilenavbar';
import Navbar from './components/Navbar';

import Bucket from './Bucket';

const Profile = () => {
  return (
    <div className='profile_main'>
      <Navbar />
      <div className='profile_content'>
        <div className='user_tab'>
          <div className='user_icon'>

          </div>
          <div className='user_info'>
            <p>Welcome Back </p>
            <p>email details</p>
            <p>location details</p>
          </div>
          <div className='wallet_bal'>
            <p>Total Portfolio</p>
            <p className='amt'>₹ 23342324</p>
          </div>

        </div>

        <div className='portfolio'>
          <table>
            <tr>
              <th>Bucket Name</th>
              <th>Purchase Amount</th>
              <th>Current Value</th>
              <th>Change</th>
              <th>Quantity</th>
            </tr>
            <br></br>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>saojajdlfj</td>
              <td>asdfadsf</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>sdlafjs</td>
              <td>dfadsfsdf</td>
            </tr>
          </table>
        </div>
      </div>
      <h2 className='shashi'>Created buckets</h2>
      <Bucket filter={
      
          {"creator_id":localStorage.getItem('user_id').substring(1,localStorage.getItem('user_id').length-1)}
        }/>
    </div>
  )
}

export default Profile