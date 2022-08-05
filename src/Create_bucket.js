import {React,useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import create_img from "./assets/create.png";

import { Dropdown } from "semantic-ui-react";
import "./create.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
  },
];

const Create_bucket = () => {

  const [coins,setCoins]  =useState([])
  useEffect(() => {
    init()
  },[1]);
  async  function init(){
    const token = localStorage.getItem('token')
    console.log(token)
    const auth = `Bearer ${token.slice(1,-1)}`
    console.log(auth)

      const res =await axios({method: 'post', //you can set what request you want to be
      url: 'http://localhost:8090/v1/coins/names',
      data: {"filter":{}},
      headers: {
        Authorization: auth
      }})

      if (res.data.response_code == 200) {
        console.log(res)
        const resp_data = res.data.reponse
        var l = []
        for(var i=0;i<resp_data.length;i++){
          l.push({
            key:resp_data[i]["_id"],
            text:resp_data[i]["name"],
            value:resp_data[i]["id"]
          })
        }
        console.log(l)
        setCoins(l)
      } else {
        console.log("message error");
        console.log(res.data.message);
  
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
  return (
    <>
    <ToastContainer />

   
    <div className="create_main">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Navbar />
      <div className="create_content">
        <div className="left_tab">
          <div className="create_img">
            <img src={create_img} alt="img" />
          </div>

          <div className="pop_btn">
            <a href="/bucket">
              <h2>adfdsf</h2>
            </a>
          </div>
        </div>

        <div className="create_form">
          <div className="create_inner">
            <h1 className="head">Create your own Bucket</h1>
            <form>
              <div className="input_set">
                <div className="input_title">
                  <h2>label</h2>
                </div>
                <div className="input_div">
                  <input type="text" placeholder="Enter your title" />
                </div>
              </div>

              <div className="input_set">
                <div className="input_title">
                  <h2>Description</h2>
                </div>
                <div className="input_div">
                  <input type="text" placeholder="Enter description"/>
                </div>
              </div>

              <div className="input_set">
                <div className="input_title">
                  <h2>Coin</h2>
                </div>
                <div className="input_div">
                    <Dropdown
                      placeholder="Choose coin"
                      fluid
                      selection
                      options={friendOptions}
                    />
                  <div className="count-input-div">
                    <input type="text" placeholder="count" />
                  </div>
                </div>
              </div>

              <div className="input_set">
                <div className="input_title">
                  <h2>Coin</h2>
                </div>
                <div className="input_div">
                    <Dropdown
                      placeholder="Choose coin"
                      fluid
                      selection
                      options={coins}
                    />
                  <div className="count-input-div">
                    <input type="text" placeholder="count" />
                  </div>
                </div>
              </div>

              <div className="input_set">
                <div className="input_title">
                  <h2>Coin</h2>
                </div>
                <div className="input_div">
                    <Dropdown
                      placeholder="Choose coin"
                      fluid
                      selection
                      options={coins}
                    />
                  <div className="count-input-div">
                    <input type="text" placeholder="count" />
                  </div>
                </div>
              </div>

              <div className="save">
                <button className="save_btn">SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Create_bucket;
