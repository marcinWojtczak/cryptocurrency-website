import React, {useEffect, useState } from 'react';
import './exchanges.css';
import { getExchangeData } from '../../api';
import millify from 'millify'
import {Link} from 'react-router-dom';


const Exchanges = () => {

  const [exchanges, setExchanges] = useState();
console.log(exchanges)

useEffect(() => {
  getExchangeData()
    .then((data) => {
      setExchanges(data)
    })
    return () => {
      
    }
}, []);

  return (
    <div className="exchanges">
      <h2 className="exchange__title gradient--text">Top Cryptocurrency Spot Exchanges</h2>

      <div className="exchange__table">
        <table className="table">
          <thead className="table__header">
            <tr className="table__row">
              <th className="table__name">#</th>
              <th className="table__name">Name</th>
              <th className="table__name">24h Volume</th>
              <th className="table__name">Markets</th>
            </tr>
          </thead>

          <tbody className="table__body">
            {exchanges?.exchanges?.map((exchange) => (
              <tr className="table__row" key={exchange.uuid}>
              <td className="table__data">{exchange.rank}</td>
              <td className="table__data">
                <div className="table__logo">
                    <img src={exchange.iconUrl} className="market__logo" alt="market-logo" />
                    <h4 className="market__name">{exchange.name}</h4>
                </div>
              </td>
              <td className="table__data">{millify(exchange['24hVolume'], {precision: 4})}</td>
              <td className="table__data">{exchange.numberOfMarkets}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Exchanges