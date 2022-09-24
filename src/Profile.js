import React from "react";
import { useState, useEffect } from "react";
import "./profile.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Bucket from "./Bucket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [loaded, setLoaded] = useState(false);
  const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    init();
  }, [1]);

  async function getDetails() {
    const token = localStorage.getItem("token");
    const auth = `Bearer ${token.slice(1, -1)}`;
    const res = await axios({
      method: "get", //you can set what request you want to be
      url: "http://localhost:8095/v1/users/details",
      headers: {
        Authorization: auth,
      },
    });

    if (res.data.response_code == 200) {
      console.log(res.data.response);
      setOrders(res.data.response.purchases);
      setDetails(res.data.response);
      setLoaded(true);
    } else {
      console.log("message error");
      console.log(res.data.message);
      setLoaded(true);
      toast(res.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error",
      });
    }
  }
  async function init() {
    getDetails();
  }

  return (
    <div className="profile_main">
      <Navbar />
      <div className="profile_content">
        <ProfileHead details={details}/>
        <h2>Purchased buckets</h2>

        <Purchased orders={orders}/>
      </div>
      <h2 className="shashi">Created buckets</h2>
      <Bucket
        filter={{
          creator_id: localStorage
            .getItem("user_id")
            .substring(1, localStorage.getItem("user_id").length - 1),
        }}
      />
    </div>
  );
};
const ProfileHead = ({details}) => {
  return (
    <>
      <div className="user_tab">
        <div className="user_icon">
          <img
            class="ui tiny circular image"
            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
          ></img>
        </div>
        <div className="user_info">
          <p>Welcome Back </p>
          <p>{details.email}</p>
          <p>wallet balance {details.wallet}</p>
        </div>
        <div className="wallet_bal">
          <p>Total Portfolio</p>
          <p className="amt">₹{Math.round(details.current_price*100)/100}</p>
        </div>
      </div>
    </>
  );
};

const Purchased = ({orders}) => {
 
  return (
    <>
      <div className="portfolio">
        <table>
          <tr>
            <th>Bucket Name</th>
            <th>Quantity</th>
            <th>Purchase Amount</th>
            <th>Current Value</th>
            <th>Profit</th>
          </tr>
          <br></br>
          <tbody>
            {Array(orders.length)
              .fill(1)
              .map((el, i) => (
                <tr>
                  <td>{orders[i].bucket_id.label}</td>
                  <td>{orders[i].quantity}</td>
                  <td>{orders[i].purchase_value}</td>
                  <td>{orders[i].bucket_id.current_price}</td>
                  {orders[i].bucket_id.current_price -
                    orders[i].purchase_value <
                  0 ? (
                    <td className="loss">
                      {Math.round(
                        ((orders[i].bucket_id.current_price -
                          orders[i].purchase_value) *
                          100 *
                          100) /
                          orders[i].purchase_value
                      ) / 100}
                      %
                    </td>
                  ) : (
                    <td className="profit">
                      {Math.round(
                        ((orders[i].bucket_id.current_price -
                          orders[i].purchase_value) *
                          100 *
                          100) /
                          orders[i].purchase_value
                      ) / 100}
                      %
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Profile;
