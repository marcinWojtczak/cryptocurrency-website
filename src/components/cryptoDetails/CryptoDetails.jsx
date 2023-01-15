import React, { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import "./cryptoDetails.css";
import { getCoinData } from '../../api';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { ImGithub } from 'react-icons/im';
import { GiCube } from 'react-icons/gi';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';



export const CryptoDetails = () => {
  
  const { timePeriod, setTimePeriod } = useState('7d');
  //get single coin form api
  const [singleCoin, setSingleCoin ] = useState();
  //set single coin
  const coin = singleCoin?.coin
  //set button
  const [button, setButton] = useState(true);

  const { coinId } = useParams()

  //get coin description from index 0 to 600 
  const htmlString = coin?.description?.substring(0, 600);
  //get full coin descriotpion
  const fullHtmlString = coin?.description;
  
  //change button
  function buttonToggle() {
  setButton(button => !button)
  }

  //fetch coin details data from api
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
          <p className="cryptoDetail__description" dangerouslySetInnerHTML={{__html: button ? htmlString : fullHtmlString }}></p>
          <div className="btn--long" onClick={buttonToggle}>
            {button ? <p>Read More</p> : <p>Hide text</p>}
          </div>
  
      </div>
        
      
      <div className="cryptoDetail__links">
        <h1 className="cryptoDetail__title gradient--text">Links</h1>
        
        <div className="cryptoDetail__link">
          <div className="cryptoDetail__items">
            <TbWorld className="icon"/>
            <h4>Website</h4>
          </div>
          <a href={coin?.links[0].url} target="blank">{coin?.links[0].name}</a>
        </div>
        
        <div className="cryptoDetail__link">
          <div className="cryptoDetail__items">
            <TbWorld className="icon"/>
            <h4>Website</h4>
          </div>
          <a href={coin?.links[1].url} target="blank">{coin?.links[1].name}</a>
        </div>

        <div className="cryptoDetail__link">
          <div className="cryptoDetail__items">
          <BsCurrencyBitcoin className="icon"/>
          <h4>Bitcoin Talk</h4>
          </div>
          <a href={coin?.links[2].url} target="blank">{coin?.links[2].name}</a>
        </div>

        <div className="cryptoDetail__link">
          <div className="cryptoDetail__items">
          <GiCube className="icon"/><h4>Block Explorer</h4>
          </div>
          <a href={coin?.links[3].url} target="blank">{coin?.links[3].name}</a>
        </div>

      {!coin?.links[4] ? '' : 
      <div className="cryptoDetail__link">
        <div className="cryptoDetail__items">
          <ImGithub className="icon"/>
          <h4>Github</h4>
        </div>
        <a href={coin?.links[4].url} target="blank">{coin?.links[4].name}</a>
      </div>
      }
          
      </div>
    </div>
  )
}

export default CryptoDetails