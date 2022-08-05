import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import create_img from "./assets/create.png";

import { Dropdown } from "semantic-ui-react";
import "./create.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Create_bucket = () => {
  const [selectedCoins,setSelectedCoins]= useState([null,null,null])

  const [coins_list, setL2] = useState([]);
  const [counts, setCount] = useState([0,0,0]);
  const [coins, setCoins] = useState([0,0,0]);

  let nav = useNavigate()

  useEffect(() => {
    init();
  }, [1]);


  async function init() {
    const token = localStorage.getItem("token");
    console.log(token);
    const auth = `Bearer ${token.slice(1, -1)}`;
    console.log(auth);

    const res = await axios({
      method: "post", //you can set what request you want to be
      url: "http://localhost:8090/v1/coins/names",
      data: { filter: {} },
      headers: {
        Authorization: auth,
      },
    });

    if (res.data.response_code == 200) {
      console.log(res);
      const resp_data = res.data.reponse;
      var l = [];
  var l2 = []

      for (var i = 0; i < resp_data.length; i++) {
        l.push({
          key: resp_data[i]["id"],
          text: resp_data[i]["name"],
          value: i,
        });
        l2.push(
          {
            key: resp_data[i]["id"],
            text: resp_data[i]["name"],
            value: resp_data[i]["symbol"],
          }
        )
      }
      setL2(l2);
      setCoins(l);
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

  async function createBucket(event) {
    event.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token);
    const auth = `Bearer ${token.slice(1, -1)}`;

    console.log(auth);
    console.log(selectedCoins)
    const res = await axios({
      method: "post", //you can set what request you want to be
      url: "http://localhost:8090/v1/buckets/create/",
      data: {
        label: label,
        description: desc,
        min_price: 0,
        coins:selectedCoins
      },
      headers: {
        Authorization: auth,
        "Content-Type":"application/json"
      },
    }); 
    console.log(res);
    if (res.data.response_code == 200) {
      console.log(res);
      toast(res.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "success",
      });
      nav('/')
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

  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const getCoinOne = (event,{value}) => {
    console.log(coins_list[value])
    console.log(value)
    var s = selectedCoins
    s[0] = {
      id:coins_list[value].key,
      symbol:coins_list[value].value,
      quantity:parseInt(count_one)
    }
    setSelectedCoins(s)
}
const getCoinTwo = (event,{value,key}) => {
  console.log(coins_list[value])
  console.log(value)
  var s = selectedCoins
  s[1] = {
    id:coins_list[value].key,
    symbol:coins_list[value].value,
    quantity:parseInt(count_two)
  }
  setSelectedCoins(s)
}
const getCoinThree = (event,{value,key}) => {
  console.log(coins_list[value])
  console.log(value)
  var s = selectedCoins
    s[2] = {
      id:coins_list[value].key,
      symbol:coins_list[value].value,
      quantity:parseInt(count_three)
    }
    setSelectedCoins(s)
}



  function handleLabelChange(event) {
    setLabel(event.target.value);
    console.log(label);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  
  const [count_one,setCountOne] = useState(0)
  function handleCountOneChange(event) {
    var count_values = counts
    count_values[0] = event.target.value
    setCount(count_values)
    setCountOne(event.target.value)
    var s = selectedCoins
    s[0] = {
      id:selectedCoins[0].id,
      symbol:selectedCoins[0].value,
      quantity:parseInt(event.target.value)
    }
    setSelectedCoins(s)
  }
  const [count_two,setCountTwo] = useState(0)
  function handleCountTwoChange(event) {
    var count_values = counts
    count_values[1] = event.target.value
    setCount(count_values)
    setCountTwo(event.target.value)
    var s = selectedCoins
    s[1] = {
      id:selectedCoins[1].id,
      symbol:selectedCoins[1].value,
      quantity:parseInt(event.target.value)
    }
    setSelectedCoins(s)
  }

  const [count_three,setCountThree] = useState(0)
  function handleCountThreeChange(event) {
    var count_values = counts
    count_values[2] = event.target.value
    setCount(count_values)
    setCountThree(event.target.value)
    var s = selectedCoins
    s[2] = {
      id:selectedCoins[2].id,
      symbol:selectedCoins[2].value,
      quantity:parseInt(event.target.value)
    }
    setSelectedCoins(s)
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
                    <input
                      type="text"
                      placeholder="Enter label"
                      value={label}
                      onChange={handleLabelChange}
                    />
                  </div>
                </div>

                <div className="input_set">
                  <div className="input_title">
                    <h2>Description</h2>
                  </div>
                  <div className="input_div">
                    <input
                      type="text"
                      placeholder="Enter description"
                      value={desc}
                      onChange={handleDescChange}
                    />
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
                      onChange={getCoinOne}
                    />
                    <div className="count-input-div">
                      <input type="text" placeholder="count" value={count_one}  onChange={handleCountOneChange}/>
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
                      onChange={getCoinTwo}
                    />
                    <div className="count-input-div">
                      <input type="text" placeholder="count" value={count_two} onChange={handleCountTwoChange}/>
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
                      onChange={getCoinThree}
                    />
                    <div className="count-input-div">
                      <input type="text" placeholder="count" value={count_three} onChange={handleCountThreeChange}/>
                    </div>
                  </div>
                </div>

                <div className="save">
                  <button className="save_btn" onClick={createBucket}>Create</button>
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
