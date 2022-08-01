import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './popup.css';

export default function PopupGfg(){
  return(
  <div >
  
    <Popup trigger={<button> signup </button>} 
     position="right center">
      <div className='form_div'>
     <form className='form1'>
      <input type="text"></input>
      <input type='text'></input>
     </form>
     </div>
    </Popup>
  </div>
  )
};