import React, { useState, useEffect} from "react";
import "./App.css";
import { Navbar, News, Homepage, Cryptocurrency} from "./components"
import { Link, Routes, Route } from "react-router-dom";


const App = () => {

  

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage />}></Route>
        <Route exact path="/cryptocurrency" element={ <Cryptocurrency />}></Route>
        <Route exact path="/news" element={ <News /> }></Route>
        
      </Routes>
      
    </div>

  )
} 

export default App;