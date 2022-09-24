import React from "react";

import "./bucket_card.css";
import PurchaseContainer from "./purchase_cointainer";

const Bucket_card = ({ bucket }) => {
  return (
    <div className="card_main">
      <div className="card_header">
        <p className="card_title">{bucket.label}</p>
        <p className="card_desc">{bucket.description}</p>
      </div>
      <div className="card_body">
        <div className="card_table">
          <br></br>
          <table className="bucket_table">
            <tr className="title">
              <th>Coin</th>
              <th>Symbol</th>
              <th>Ratio</th>
            </tr>
            <tr>
              <td>{bucket.coins[0].id}</td>
              <td>{bucket.coins[0].symbol}</td>
              <td>{bucket.coins[0].quantity}</td>
            </tr>
            <tr>
              <td>{bucket.coins[1].id}</td>
              <td>{bucket.coins[1].symbol}</td>
              <td>{bucket.coins[1].quantity}</td>
            </tr>
            <tr>
              <td>{bucket.coins[2].id}</td>
              <td>{bucket.coins[2].symbol}</td>
              <td>{bucket.coins[2].quantity}</td>
            </tr>
          </table>
          <div className="crt_btn">
            <button type="button" onClick={() => {}}>
             <a href="/purchase"> Buy bucket</a>
            </button>
          </div>
        </div>
        <div className="card_value">
          <p className="value_head">Current Value</p>

          <p className="value_price">
            {Math.round(bucket.current_price * 100) / 100}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bucket_card;
