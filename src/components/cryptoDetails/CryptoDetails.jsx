import React, { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import "./cryptoDetails.css";
import { getCoinData } from '../../api';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';;



export const CryptoDetails = () => {
  
  const { timePeriod, setTimePeriod } = useState('7d');
  const [singleCoin, setSingleCoin ] = useState();
  const { coinId } = useParams()
  const coin = singleCoin?.coin
  const htmlString = coin?.description
  console.log(htmlString)


  
  const htmlLength = htmlString?.length > 400 ? htmlString?.substring(0, 400) : htmlString
  


  useEffect(() => {
    getCoinData(coinId)
    .then((data) => {
      setSingleCoin(data)
    })
  }, [coinId]);

return (
    <div className="cryptoDetail__container">
      <div className="cryptoDetail__header">
        <img className="cryptoDetail__logo" src={coin?.iconUrl} />
        <div className="cryptoDetail__content">
          <span className="cryptoDetail__name">{coin?.name}</span>
          <span className="cryptoDetail__symbol">{coin?.symbol}</span>
          <span className="cryptoDetail__rank">#{coin?.rank}</span>
          <span className="cryptoDetail__price gradient--text">{`$ ${millify(coin?.price, {precision: 6})}`}</span>
        </div>
      </div>

      <div className="line__chart">
        <Sparklines data={coin?.sparkline}>
          <SparklinesLine color="#FF8A71" />
        </Sparklines>
      </div>

      <div className="cryptoDetail__stats">
        <h1 className="cryptoDetail__title gradient--text">Value statistics</h1>
        <h3 className="cryptoDetail__description">An overview showing the statistics of {coin?.name}, such as the base and quote currency, the rank, and trading volume.
        </h3>
        <h4 className="cryptoDetail__text">Price to USD: <span className="cryptoDetail__number">{`$ ${millify(coin?.price, {precision: 6})}`}$</span></h4>
        <h4 className="cryptoDetail__text">Price to BTC: <span className="cryptoDetail__number">{`${millify(coin?.btcPrice, {precision: 6})}`}BTC
        </span></h4>
        <h4 className="cryptoDetail__text">Coin Change: <span className="cryptoDetail__number">{coin?.change} %</span></h4>
        <h4 className="cryptoDetail__text">Market Cap: <span className="cryptoDetail__number">{`${millify(coin?.marketCap, {precision: 6})}`}</span></h4>
        <h4 className="cryptoDetail__text">All time high: <span className="cryptoDetail__number">{`${millify(coin?.allTimeHigh.price, {precision: 6})}`}</span></h4>
      </div>

      <div className="cryptoDetail__info">
        <h1 className="cryptoDetail__title gradient--text">What is {coin?.name}</h1>
        <h3 className="cryptoDetail__description" dangerouslySetInnerHTML={{__html: htmlLength}}></h3>
        
      
        <div className="cryptoDetail__links">
          <h1 className="cryptoDetail__title gradient--text">Links</h1>
          <h4 className="cryptoDetail__text">Website <span className="cryptoDetail__link">{coin?.links[0].name}</span></h4>
          <h4 className="cryptoDetail__text">Website <span className="cryptoDetail__link">{coin?.links[1].name}</span></h4>
          <h4 className="cryptoDetail__text">Bitcoin Talk <span className="cryptoDetail__link">{coin?.links[2].name}</span></h4>
          <h4 className="cryptoDetail__text">Block Explorer <span className="cryptoDetail__link">{coin?.links[3].name}</span></h4>
          {!coin?.links[4] ? '' : <h4 className="cryptoDetail__text">GitHub <span className="cryptoDetail__link">{coin?.links[4].name}</span></h4>}
          
        </div>
      </div>
    </div>
    
  )
}

export default CryptoDetails