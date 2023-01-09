import React, { useState, useEffect } from "react";
import "./homepage.css";
import { Cryptocurrency } from "../../components";
import { Link } from "react-router-dom";
import { getCoinsData } from "../../api"

const Homepage = () => {
  
const [data, setData] = useState()
console.log(data)

  useEffect(() => {
    getCoinsData()
    .then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="homepage">
      
      <section className="info">
        <h1 className="info__title gradient--text">Global Crypto Stats</h1>
        <div className="info__crypto--stats">
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">Cryptos:</span>
            <span>{data?.stats?.total}</span>
          </h3>
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">Exchanges:</span>
            <span>{data?.stats?.totalExchanges}</span>
          </h3>
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">Market Cap:</span>
            <span>{data?.stats?.totalMarketCap}</span>
          </h3>
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">24h vol:</span>
            <span>{data?.stats?.total24hVolume}</span>
          </h3>
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">Dominance:</span>
            <span> BTC 39.5%, ETH: 18.8%</span>
            </h3>
        </div>
      </section>

      <section className="cryptocurrency">
        <div className="cryptocurrency__title gradient--text">
          <h1>Top 10 Cryptocurrencies in the world</h1>
        </div>
        <div className="cryptocurrency__link">
          <Link to="/cryptocurrencies">See more</Link>
        </div>
        <Cryptocurrency data={data} simplified={true} />
      </section>
      
    </div>
  )
}

export default Homepage;