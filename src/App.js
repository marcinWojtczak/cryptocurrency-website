import React, { useState, useEffect} from "react";
import "./App.css";
import { Navbar, News, Homepage, Cryptocurrency} from "./components"
import { Link, Routes, Route } from "react-router-dom";
import { getCoinsData, cryptoNewsData } from "../src/api";


const App = () => {
  const [data, setData] = useState();
  console.log(data)
  const[news, setNews] = useState();
  console.log(news)

  //get crypto data
  useEffect(() => {
    getCoinsData()
    .then((data) => {
      setData(data)
    })
  }, []);

  //get crypto info
  useEffect(() => {
    cryptoNewsData('Cryptocurrency', 6)
    .then((data) => {
      setNews(data)
    })
  }, [])
  

  return (
    <div className="app gradient--bg">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage data={data} news={news}/>}></Route>
        <Route exact path="/cryptocurrency" element={ <Cryptocurrency data={data}/>}></Route>
        <Route exact path="/news" element={ <News news={news} /> }></Route>
        
      </Routes>
      
    </div>

  )
} 

export default App;