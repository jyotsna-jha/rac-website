import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Inventory from "./routes/Inventory";
import Ourteam from "./routes/Ourteam";
import Alumni from "./routes/Alumni";
import Workshops from "./routes/Workshop";

import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/alumni" element={<Alumni/>} />
      <Route path="/Ourteam" element={<Ourteam/>}/>
      <Route path="/Workshops" element={<Workshops/>}/>
    </Routes>
    
    
    
    </>
    
  );
}

export default App;
