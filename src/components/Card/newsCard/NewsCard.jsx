import React from "react";
import calendar from "../../../assets/new/svg/calendar.svg";
import { Link } from "react-router-dom";
import "./NewsCard.scss";

function NewsCard({ data }) {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={data.image}  alt={data.title || "Новость"} 
          loading="lazy"/>
      </div>
      <div className="news-card-content">
        <div className="news-date">
          <img src={calendar} alt="Календарь" />
          <span>{data.created_at}</span>
        </div>
        <h3 className="news-title">{data.title}</h3>
        <p className="news-text">{data.content}</p>
        <Link to={`/news/${data.id}`} className="news-link">
          Читать подробнее
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;