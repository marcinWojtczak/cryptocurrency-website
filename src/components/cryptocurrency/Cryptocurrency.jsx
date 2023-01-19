import React, {useState, useEffect }from "react";
import "./cryptocurrency.css";
import { Link } from "react-router-dom";
import millify from "millify";


const Cryptocurrency = ({ data, simplified }) => {
  
  const coins = data?.coins
  const count = simplified ? 10: 50
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

  
  return (
    <div className="cryptocurrency__table">
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            {windowWidth > 1050 
            ?
            <>
              <th className="table__name">#</th>
              <th className="table__name">Name</th>
              <th className="table__name">Tier</th>
              <th className="table__name">Price</th>
              <th className="table__name">Market Cup</th>
              <th className="table__name">Daily Change</th>
            </>
            :
            <>
              <th className="table__name">#</th>
              <th className="table__name">Name</th>
              <th className="table__name">Price</th>
              <th className="table__name">Daily Change</th>
            </>
          }
            
          </tr>
        </thead>
        
        {windowWidth > 1050
        ?
          <tbody className="table__body">
            {coins?.slice(0, count).map((coin) => (
                <tr className="table__row" key={coin.uuid}>
                  <td className="table__data">{`${coin.rank}.`}</td>
                  <td className="table__data">
                    <div className="table__logo">
                      <Link className="table__link" to={`/coin/${coin.uuid}`} >
                        <img src={` ${coin.iconUrl}`} className="coins__logo" alt="coins-logo"></img>{coin.name}
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
        :
          <tbody className="table__body">
            {coins?.slice(0, count).map((coin) => (
                <tr className="table__row" key={coin.uuid}>
                  <td className="table__data">{`${coin.rank}.`}</td>
                  <td className="table__data">
                    <div className="table__logo">
                      <Link className="table__link" to={`/coin/${coin.uuid}`} >
                        <img src={` ${coin.iconUrl}`} className="coins__logo" alt="coins-logo"></img>{coin.name}
                      </Link> 
                    </div>
                  </td>
                  <td className="table__data">{`${millify(coin.price,{precision: 3})} $`}</td>
                  <td className="table__data">{`${coin.change} %`}</td>
                </tr>
            ))}
          </tbody>
        } 
      </table>
    </div>
  )
}

export default Cryptocurrency;