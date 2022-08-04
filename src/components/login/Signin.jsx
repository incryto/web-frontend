import React, { useState } from "react";
import axios from "axios";

import {
  Button,
  Modal,
  Form,
  Input,
  TextArea,
  Select,
  Icon,
} from "semantic-ui-react";
import Navbar from "../Navbar";
import "./signin.css";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Test = () => {
  let nav = useNavigate();

  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [phone, setphone] = useState();

  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(true);

  async function updateUserInfo(fname, lname, phone) {
    const body = {
        name: `${fname} ${lname}`,
        mobile: phone,
      }
    // const res =await axios.post("http://localhost:8080/v1/profile/step-one",body );
    const token = localStorage.getItem('token')
    console.log(token)
    const auth = `Bearer ${token.slice(1,-1)}`
    console.log(auth)

      const res  = await axios({method: 'post', //you can set what request you want to be
      url: 'http://localhost:8080/v1/profile/step-one',
      data: body,
      headers: {
        Authorization: auth
      }})
    if (res.data.response_code == 200) {
      nav("/");
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

//   async function handleinfo(e) {
//     e.preventDefault();
//     const data = await ;
//   }

  return (
    <>
    <ToastContainer />

      <Navbar />
      <Modal onClose={() => setThirdOpen(false)} open={thirdOpen}>
        <div className="info_modal">
          <Form>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="First name"
                placeholder="First name"
                onChange={(e) => setfname(e.target.value)}
              />
              <Form.Input
                label="Last name"
                placeholder="Last name"
                onChange={(e) => setlname(e.target.value)}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
                label="Phone"
                placeholder="Phone"
                onChange={(e) => setphone(e.target.value)}
              />
            </Form.Group>

            {/* <br></br>
                        <div className='s_btn'>
                            <button type='submit' >SAVE</button>
                        </div> */}
          </Form>
        </div>

        <Modal.Actions>
          <Button
            onClick={() => {
              setSecondOpen(false);
              setFirstOpen(false);
            //   handleinfo(e)
                updateUserInfo(fname, lname, phone)
            }}
            primary
          >
            Proceed <Icon name="right chevron" />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Test;
