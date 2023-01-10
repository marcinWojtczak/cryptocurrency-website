import React, { useState, useEffect } from "react";
import "./homepage.css";
import { Cryptocurrency, News } from "../../components";
import { Link } from "react-router-dom";
import millify from "millify";


const Homepage = ( {data, news} ) => {
  
  return (
    <div className="homepage ">
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
            <span>{millify(data?.stats?.totalMarketCap)}</span>
          </h3>
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">24h vol:</span>
            <span>{millify(data?.stats?.total24hVolume)}</span>
          </h3>
          <h3 className="info__crypto--details">
            <span className="info__crypto--text">Dominance:</span>
            <span> BTC 39.5%, ETH: 18.8%</span>
            </h3>
        </div>
      </section>

      <section className="cryptocurrency">
        <div className="cryptocurrency__title">
          <h1 className="gradient--text">Top 10 Cryptocurrencies in the world</h1>
          <Link to="/cryptocurrencies" className="cryptocurrency__link">See more</Link>
        </div>
        <Cryptocurrency data={data}/>
      </section>

      <section className="news">
        <div className="news__title">
          <h1 className="gradient--text">Latest Crypto News</h1>
          <Link to="/cryptocurrencies" className="news__link">See more</Link>
        </div>
        <News news={news} simplified={true}/>
      </section>

    </div>
  )
}

export default Homepage;