import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css';
import Home from "./views/Home";
import Photos from "./views/Photos";
import Contact from "./views/Contact";
import Sobre from "./views/Sobre";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </Router>  
  );
}

export default App;
