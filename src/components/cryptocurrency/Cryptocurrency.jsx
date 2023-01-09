import React, { useState, useEffect} from "react";
import "./cryptocurrency.css";
import { Link } from "react-router-dom";
import { getCoinsData } from "../../api/"

const Cryptocurrency = ({ data, simplified }) => {
  const count = simplified ? 10: 50;
  const [cryptos, setCryptos] = useState(data?.coins)
  console.log(cryptos)
  
  return (
    <>
      <div className="cryptocurrency__container">
        {cryptos?.map((crypto) => (
          <Link 
            className="cryptocurrency__card gradient--bg" 
            key={crypto.uuid} 
            to={`/crypto/${crypto.uuid}`} 
          >
            <div className="cryptocurrency__name">
              <h2 className="cryptocurrency__info">{ `${crypto.rank}. ${crypto.name}`}</h2>
              <img src={` ${crypto.iconUrl}`} className="cryptocurrency__img" alt="crypto-img"></img>
            </div>
          </Link>
        ))}
      </div>
    </>
    
    )
}

export default Cryptocurrency;