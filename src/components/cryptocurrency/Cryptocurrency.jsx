import React, { useState, useEffect} from "react";
import "./cryptocurrency.css";
import { Link } from "react-router-dom";
// import { Sparklines, SparklinesLine, SparklinesNormalBand, SparklinesSpots } from "react-sparklines";
import { getCoinsData } from "../../api/";
import millify from "millify";

const Cryptocurrency = ({ data, simplified }) => {
  console.log(data)
  const coins = data?.coins
  const count = simplified ? 10: 50
  
  
  return (
    <div className="cryptocurrency__table">
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__name"><h3>#</h3></th>
            <th className="table__name"><h3>Name</h3></th>
            <th className="table__name"><h3>Tier</h3></th>
            <th className="table__name"><h3>Price</h3></th>
            <th className="table__name"><h3>Market Cup</h3></th>
            <th className="table__name"><h3>Daily Change</h3></th>
          </tr>
        </thead>
        
        <tbody className="table__body">
          {coins?.slice(0, count).map((coin) => (
              <tr className="table__row" key={coin.uuid}>
                <td className="table__data">{`${coin.rank}.`}</td>
                <td className="table__data">
                  <div className="table__logo">
                    <Link className="table__link" to={`/crypto/${coin.uuid}`}>
                      <img src={` ${coin.iconUrl}`} className="coins__logo"></img>{coin.name}
                    </Link> 
                  </div>
                </td>
                <td className="table__data">{coin.tier}</td>
                <td className="table__data">{`${millify(coin.price,{precision: 3})} $`}</td>
                <td className="table__data">{`${millify(coin.marketCap,{precision: 5})} $`}</td>
                <td className="table__data">{`${coin.change}%`}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cryptocurrency;