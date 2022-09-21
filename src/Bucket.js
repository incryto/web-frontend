import React from "react";
import Navbar from "./components/Navbar";
import "./bucket.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Bucket_card from "./components/bucket_card";
import { Divider } from "semantic-ui-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Bucket = ({filter}) => {
  useEffect(() => {
    init();
  }, [1]);

  const [buckets, setBuckets] = useState([]);

  const [loaded, setLoaded] = useState(false);

  async function init() {
    const token = localStorage.getItem("token");
    console.log(token);
    const auth = `Bearer ${token.slice(1, -1)}`;
    console.log(auth);
    const fil = filter??{}
    const res = await axios({
      method: "post", //you can set what request you want to be
      url: "http://localhost:8090/v1/buckets/all",
      data: { "filter": fil },
      headers: {
        Authorization: auth,
      },
    });

    if (res.data.response_code == 200) {
      console.log(res.data.response);
      setBuckets(res.data.response);
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
  return (
    <>
      {" "}
      <ToastContainer />
      <div className="buck_main">
       {filter==null? <Navbar />:<></>}

        <div className="buck_content">
          {loaded ? (
            <div className="bucket_list_box">
              <tbody>
                {Array(Math.floor(buckets.length / 2))
                  .fill(1)
                  .map((el, i) => (
                    <div className="bucket-row">
                      <Bucket_card bucket={buckets[i]} />
                      <Bucket_card bucket={buckets[i+1]} />
                    </div>
                  ))}
              </tbody>

              {buckets.length % 2 == 1 ? (
                <div className="bucket-row">
                  <Bucket_card
                    bucket={buckets[Math.floor(buckets.length / 2) * 2 ]}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}

          {filter==null?
          <><Divider horizontal className="divider">
            <p className="or_p">OR</p>
          </Divider>
          <div className="crt_btn">
            <a href="/create">
              <button>Create Your Own Bucket</button>
            </a>
          </div></>:<>
            <p>Loading! please wait</p>
          </>}
        </div>
      </div>
    </>
  );
};

export default Bucket;
