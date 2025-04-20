import React from "react";
import calendar from "../../../assets/new/svg/calendar.svg";
import { Link } from "react-router-dom";
import "./NewsCard.scss"

function NewsCard({ data }) {
  return (
    <div className="NewsCard">
      <div className="NewsImage">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="NewsTextContant">
        <div className="dataContainer">
          <img src={calendar} alt="Календарь" /> 
          <p className="data">{data.created_at}</p>
        </div>
        <h3 className="title">{data.title}</h3>
        <p className="Content">{data.content}</p>
        <Link to={`/news/${data.id}`}>
          <button className="ReadMorebtn">Читать подробнее</button>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;