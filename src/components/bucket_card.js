import React from 'react'

import './bucket_card.css'

const Bucket_card = ({price}) => {
    return (
        <div className='card_main'>
            <div className='card_header'>
                <p className='card_title'>Bluechips</p>
                <p className='card_desc'>Description of bucket</p>
            </div>
            <div className='card_body'>
                <div className='card_table'>
                    <br></br>
                    <table className='bucket_table'>
                    <tr>
                        <th>Coin</th>
                        <th>Symbol</th>
                        <th>Value</th>
                        <th>Ratio</th>
                    </tr>
                    <tr>
                        <td>bitcoin</td>
                        <td>BTC</td>
                        <td>123978</td>
                        <td>5</td>
                    </tr>
                    </table>
                </div>
                <div className='card_value'>
                    <p className='value_head'>Current Value</p>
                    <p className='value_price'>{price}₹</p>
                </div>
            </div>

        </div>
    )
}

export default Bucket_card