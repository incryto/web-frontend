import React from 'react'
import './popup.css';
function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup_inner'>
            <button className='clost-btn'>Close</button>1

            { props.children }
        </div>
    </div>
  )
  : "";
}

export default Popup