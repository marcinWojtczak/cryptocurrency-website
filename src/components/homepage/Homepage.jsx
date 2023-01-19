import React from "react";
import "./homepage.css";
import { Cryptocurrency, News, Footer } from "../../components";
import { Link } from "react-router-dom";
import millify from "millify";


const Homepage = ( {data, news} ) => {
  
  return (
    <div className="homepage ">
      <section className="info">
        <h2 className="info__title gradient--text">Global Crypto Stats</h2>
        <div className="info__crypto--stats">
          <h4 className="info__crypto--details">
            <span className="info__crypto--text">Cryptos:</span>
            <span>{data?.stats?.total}</span>
          </h4>
          <h4 className="info__crypto--details">
            <span className="info__crypto--text">Exchanges:</span>
            <span>{data?.stats?.totalExchanges}</span>
          </h4>
          <h4 className="info__crypto--details">
            <span className="info__crypto--text">Market Cap:</span>
            <span>{millify(data?.stats?.totalMarketCap)}</span>
          </h4>
          <h4 className="info__crypto--details">
            <span className="info__crypto--text">24h vol:</span>
            <span>{millify(data?.stats?.total24hVolume)}</span>
          </h4>
          <h4 className="info__crypto--details">
            <span className="info__crypto--text">Dominance:</span>
            <span> BTC 39.5%, ETH: 18.8%</span>
            </h4>
        </div>
      </section>

      <section className="cryptocurrency">
        <div className="cryptocurrency__header">
          <h2 className="cryptocurrency__title gradient--text">Top 10 Cryptocurrencies in the world</h2>
          <Link to="/cryptocurrency" className="link__btn">See more</Link>
        </div>
        <Cryptocurrency data={data} simplified={true}/>
      </section>

      <section className="news">
        <div className="news__header">
          <h2 className="news__title gradient--text">Latest Crypto News</h2>
          <Link to="/news" className="link__btn">See more</Link>
        </div>
        <News news={news} simplified={true}/>
      </section>

      <section className="footer">
        <Footer />
      </section>

    </div>
  )
}

export default Homepage;