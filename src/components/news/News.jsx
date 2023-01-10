import React from "react";
import "./news.css";
import { Link } from "react-router-dom"

const News = ( { news, simplified }) => {
  const data = news?.value
  console.log(data)

  return (
    <div className="news__container">
      {data?.slice(0, 6).map((news, index) => (
        <div className="news__card" key={index}>
          <a href={news.url} target="blank">
            <div className="card__title">
              <img className="card__img" src={news?.image?.thumbnail?.contentUrl} alt="news"></img>
              <h2>{news.title}</h2>
            </div>
            <div className="card__content">
              <p>
                {news.description > 80 
                  ? `${news.description.substring(1, 80)}...`
                  : news.description
                }
              </p>
            </div>
          </a>
        </div>
      ))}
      <h1>News</h1>
    </div>
    
  )
}

export default News;