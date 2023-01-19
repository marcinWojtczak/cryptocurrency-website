import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <h3>Copyright © 2021</h3>
        <h3>
          <Link to="/">CryptoMarket Inc.</Link> 
        </h3>
        <h3>
          All Rights Reserved.
        </h3>
      </div>

      <div className="footer__links">
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </div>
      </div>
  )
}

export default Footer