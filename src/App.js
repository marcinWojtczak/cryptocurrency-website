import React, { useState, useEffect} from "react";
import "./App.css";
import { Navbar, News, Homepage, Cryptocurrency, CryptoDetails, Exchanges, Footer } from "./components"
import { Routes, Route } from "react-router-dom";
import { getCoinsData, cryptoNewsData } from "../src/api";


const App = () => {
  const [data, setData] = useState();
  const[news, setNews] = useState();

  //get coins data
  useEffect(() => {
    getCoinsData()
    .then((data) => {
      setData(data)
    })
  }, []);

  //get crypto info
  useEffect(() => {
    cryptoNewsData('Cryptocurrency')
    .then((data) => {
      setNews(data)
    })
  }, [])
  

  return (
    <>
    <div className="app gradient--bg">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage data={data} news={news}/>}></Route>
        <Route exact path="/cryptocurrency" element={ <Cryptocurrency data={data}/>}></Route>
        <Route exact path="/exchanges" element={ <Exchanges />}></Route>
        <Route exact path="/news" element={ <News news={news} />}></Route>
        <Route exact path="/coin/:coinId" element={<CryptoDetails />}></Route>        
      </Routes>
    </div>
    <Footer />
    </>
  )
} 

export default App;