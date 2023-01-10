import React, { useState, useEffect} from "react";
import "./cryptocurrency.css";
import { Link } from "react-router-dom";
import { getCoinsData } from "../../api/";
import millify from "millify";

const Cryptocurrency = ({ data, toggle }) => {
  const coins = data?.coins
  console.log(coins)

  
  return (
    <div className="cryptocurrency__container">
      {coins?.slice(0,10).map((coin) => (
        <Link 
          className="cryptocurrency__card" 
          key={coin?.uuid} 
          to={`/crypto/${coin.uuid}`} 
        >
          <div className="cryptocurrency__name">
            <h2 className="cryptocurrency__info">{ `${coin.rank}. ${coin.name}`}</h2>
            <img src={` ${coin.iconUrl}`} className="cryptocurrency__img" alt="crypto-img"></img>
          </div>
          <div className="cryptocurrency__stats">
            <h3 className="cryptocurrency__stats--info">Price: {millify(coin.price)} $</h3>
            <h3 className="cryptocurrency__stats--info">Tier: {millify(coin.tier)} </h3>
            <h3 className="cryptocurrency__stats--info">Market Csp: {millify(coin.marketCap)}</h3>
            <h3 className="cryptocurrency__stats--info">Daily Change: {millify(coin.change)}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cryptocurrency;