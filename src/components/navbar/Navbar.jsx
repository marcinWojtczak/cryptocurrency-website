import React, { useState} from "react";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line} from "react-icons/ri";
import { logo, home, cryptocurrency, exchange, news } from "../../assets";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <div className="navbar__links">
      <div className="navbar__item">
        <img src={ home } className="navbar__icon" alt="home-icon"/>
        <Link to="/" className="navbar__link">Home</Link>
      </div>
      <div className="navbar__item">
        <img src={ cryptocurrency } className="navbar__icon" alt="crypto-icon"/>
        <Link to="/cryptocurrency" className="navbar__link">Cryptocurrency</Link>
      </div>
      <div className="navbar__item">
        <img src={ exchange } className="navbar__icon" alt="exchange-icon"/>
        <Link to="/exchanges" className="navbar__link">Exchange</Link>
      </div>
      <div className="navbar__item">
        <img src={ news } className="navbar__icon" alt="news-icon"/>
        <Link to="/news" className="navbar__link">News</Link>
      </div>
    </div>
  </>
)


const Navbar = () => {
  

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <div className="navbar ">
      <Link to="/">
        <div className="navbar__logo">
          <img src={ logo } className="navbar__img" alt="logo-img" />
          <span className="navbar__text">Crypto market</span>
        </div>
      </Link>
      <div className="navbar__menu">
        <Menu />
      </div>
      <div className="navbar__hamburgerMenu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="navbar__hamburgerMenu--container">
            <Menu />
          </div>
        )}
      </div>
    </div>
  )
}

export default  Navbar;