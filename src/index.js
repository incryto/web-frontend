import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Bucket from './Bucket';
import Profile from './Profile';
import Signin from './components/login/Signin';
import Otp from './components/login/Otp'
import './index.css';
import Create_bucket from './Create_bucket';
import Test from './Test';



export default function App(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/bucket">
          <Route index element={<Bucket />} />
        </Route>
        <Route path="/profile">
          <Route index element={<Profile />} />
        </Route>
        <Route path="/create">
          <Route index element={<Create_bucket />} />
        </Route>

        <Route path="/profile-completion">
          <Route index element={<Signin/>} />
        </Route>

        <Route path="/otp">
          <Route index element={<Otp/>} />
        </Route>
        
        <Route path="/test">
          <Route index element={<Test/>} />
        </Route>

      </Routes>
    </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
