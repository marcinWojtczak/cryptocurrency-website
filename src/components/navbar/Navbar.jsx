import React from "react";
import "./navbar.css";
import { logo, home, cryptocurrency, exchange, news } from "../../assets";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return(
    <div className="navbar gradient__bg">
      <div className="navbar__logo">
        <img src={ logo } class="navbar__img" alt="logo-img" />
        <span className="navbar__text">Crypto market</span>
      </div>
      <div className="navbar__menu">
        <div className="navbar__item">
          <img src={ home } className="navbar__icon"/>
          <Link to="/">Home</Link>
        </div>
        <div className="navbar__item">
          <img src={ cryptocurrency } className="navbar__icon"/>
          <Link to="/cryptocurrency">Cryptocurrency</Link>
        </div>
        <div className="navbar__item">
          <img src={ exchange } className="navbar__icon"/>
          <Link to="/exchange">Exchange</Link>
        </div>
        <div className="navbar__item">
          <img src={ news } className="navbar__icon"/>
          <Link to="/news">News</Link>
        </div>
      </div>
    </div>
  )
}

export default  Navbar;