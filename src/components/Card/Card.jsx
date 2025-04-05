import React from "react";
import calendar from "../../assets/new/svg/calendar.svg";
import glassesIcon from "../../assets/svg/glasses.svg"; // Пример для категории
import locationIcon from "../../assets/svg/location.svg"; // Пример для локации
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ event }) {
  if (!event) {
    return null;
  }

  const { image, title, date, description, location, category } = event;

  const formattedDate = date ? new Date(date).toLocaleDateString() : 'Дата неизвестна';
  const categoryName = category?.name || 'Без категории';
  const eventLocation = location || 'Локация неизвестна';

  return (
    <div className="Card">
      <div className="CardImage">
        <img src={image || '/assets/svg/event.png'} alt={title || 'Событие'} />
      </div>
      <div className="CardTextContent">
        <div className="dataContainer">
          <img src={calendar} alt="Календарь" />
          <p className="data">{formattedDate}</p>
        </div>
        <h3 className="title">{title || 'Без названия'}</h3>
        <p className="content">{description || 'Описание отсутствует'}</p>
        <div className="locationContainer">
          <img src={locationIcon} alt="Локация" />
          <span>{eventLocation}</span>
        </div>
        <div className="group-btn">
          <button className="btn3">Записаться</button>
          <Link to="/event">
            <button className="btn4">Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
