import React, { useEffect, useState } from "react";
import "./news.css";
import moment from 'moment'

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ( { news, simplified }) => {
  const data = news?.value;
  const count = simplified ? 6: 15

  return (
    <div className="news__container">
      {data?.slice(0, count).map((news, index) => (
        <div className="news__card" key={index}>
          <a href={news.url} className="news__link" target="blank">
            <div className="news__card--title">
              <img className="news__img" src={news?.image?.thumbnail?.contentUrl} alt="news"></img>
              <h3 className="news__text gradient--text">{news.name}</h3>
            </div>
            <div className="news__content">
              <p>
                {news.description > 60 
                  ? `${news.description.substring(1, 60)}...`
                  : news.description
                }
              </p>
            </div>
            <div className="provider__container">
              <div className="provider__source">
                <img className="provider__img" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt=""/>
                <p className="provider__name">{news.provider[0]?.name}</p>
                </div>
              <p className="provider__time">{moment(news.datePublished).startOf('hour').fromNow()}</p> 
            </div>
          </a>
        </div>
      ))}
    </div>
    
  )
}

export default News;