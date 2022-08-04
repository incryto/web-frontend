import React from 'react'
import './profile.css';
// import Profilenavbar from './components/Profilenavbar';
import Navbar from './components/Navbar';

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
          {/* <div className='portfolio_title'>
            <h2> Portfolio</h2>
          </div>
          <div className='portfolio_content'>
            <div className='port_heading'>
              <h3>Bucket Name</h3>
              <h3>Purchase Amount</h3>
              <h3>Current Value</h3>
              <h3>Change</h3>
              <h3>Quantity</h3>
            </div>
            <div className='port_list'>
              <h3>bucket asdf1</h3>
              <h3>asldfjladjsdfasfl</h3>
              <h3>safkjsldkjfa</h3>
              <h3>alskfjsdklfj</h3>
              <h3>dalsfjldsj</h3>
            </div>

          </div> */}
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

        <div className='buckets'>
          
        </div>
      </div>
    </div>
  )
}

export default Profile