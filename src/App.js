//import logo from './logo.svg';

//import Home from "./Home";// import React from 'react';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Login from './Topics/Header';
import BagOpen from "./Topics/Bo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Dashboard  from './Topics/Dashboard';
import Nav from "./Topics/Navbar";
import Bag from "./Topics/Bag";

function App() {
  return(
  <div>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<BagOpen/>} />
        <Route path="/dashboard" element={ <Dashboard/>} />
        <Route path="/Menu" element={ <Nav/>} />
        </Routes>
    </Router>
  
 </div>
  );
}
export default App;
