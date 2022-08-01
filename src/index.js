import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Bucket from './Bucket';
import Profile from './Profile';

import './index.css';

import Cryptotable from './components/cryptotable/Cryptotable';

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
        <Route path="/test">
          <Route index element={<Cryptotable />} />
        </Route>

      </Routes>
    </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
