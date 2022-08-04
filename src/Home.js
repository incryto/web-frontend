import React, { useState ,useEffect} from "react";

import Navbar from "./components/Navbar";
import "./home.css";
import bit_image from "./assets/bitcoin.png";
import Cryptotable from "./components/cryptotable/Cryptotable";
import login_svg from "./assets/otp-cuate.svg";
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  let nav = useNavigate()

  const [signin, setSignin] = useState(true);
  const [isOtp, setOtpPage] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState("");

  const [isSigned,setIsSigned] = useState(false)
  useEffect(() => {
    init()
  });
  async function init() {
     const token =   localStorage.getItem('token')
     console.log(token)
     if(token!=null){
      console.log("user already signed in")
      setIsSigned(true)
     }
  }

  function handleChange (event) {
    setEmail(event.target.value);
  };

  function handleOtpChange(event) {
      setOtp(event.target.value)
  }
  
  const handleSignin = async (event) => {
    event.preventDefault();
    // 👇️ value of input field
    console.log("email ", email);
    const res  =await axios.post('http://localhost:8080/v1/login', { email: email })
    console.log(res)
    if(res.data.response_code==200){
      setOtpPage(true)
      setSignin(false)
    }else{
      console.log("message error")
      console.log(res.data.message)
      
      toast(res.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error"
      });
    }
  };

  
  const handleOtpVerification = async (event) => {
    event.preventDefault();
    // 👇️ value of input field
    console.log("otp ", otp);
    const res  =await axios.post('http://localhost:8080/v1/otp/verify', { email: email ,otp:otp})
    console.log(res)
    if(res.data.response_code==200){
      setOtpPage(false)
      setSignin(true)
      setIsSigned(true)
      localStorage.setItem('token', JSON.stringify(res.data.response.token));
      if(res.data.response.completion==0){
        nav('/profile-completion')
      }
    }else{
      console.log("message error")
      console.log(res.data.message)
      
      toast(res.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error"
      });
    }
  
  }
  return (
    <>
    <ToastContainer />
    <div className="home_main">
      {signin ? (
        <>
          <Navbar/>
          <HomeContent handleChange={handleChange} onpressed={handleSignin} email={email} isSigned={isSigned}/>
          <Cryptotable />
        </>
      ) : (
        <></>
      )}
      {isOtp ? <OtpVerification handleChange={handleOtpChange} onpressed={handleOtpVerification} otp={otp} /> : <></>}
    </div>
    </>
  );
};

const HomeContent = ({handleChange,onpressed,email,isSigned}) => {
  
  return (
    <div className="home section__padding" id="home">
      <div className="home_content">
        <h1 className="gradient__text">
          Buy and sell cryptocurrencies with Incrypto
        </h1>

        <div className="home_text">
          <p className="text_journey">Let the Journey begin! It's time to go</p>
          <p className="text_incrypto">&nbsp;Incrypto</p>
        </div>

       {isSigned?<></>: <div className="header_input">
          <input type="email" placeholder="your email address" onChange={handleChange}
              value={email}/>
          <button type="button" onClick={onpressed}>Get Started</button>
        </div>}
      </div>
      <div className="home_image">
        <img src={bit_image} alt="AI" />
      </div>
    </div>
  );
};

const OtpVerification = ({handleChange,onpressed,otp}) => {
  return (
    <div className="home section__padding" id="home">
      <div className="home_content">
        <h1 className="gradient__text">Get verified using your otp</h1>

        <div className="home_text">
          <p className="text_journey">check your email to get </p>
          <p className="text_incrypto">&nbsp;OTP</p>
        </div>

        <div className="header_input">
          <input type="email" placeholder="Enter otp here"  onChange={handleChange} value={otp}/>
          <button type="button" onClick={onpressed}>Verify otp</button>
        </div>
      </div>
      <div className="home_otp_image">
        <img src={login_svg} alt="AI" />
      </div>
    </div>
  );
};
export default Home;
