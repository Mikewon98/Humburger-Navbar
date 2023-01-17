import "./App.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallary from "./Gallary";
import Contact from "./Contact";
import SignUp from "./SignUp";

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallary' element={<Gallary />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
