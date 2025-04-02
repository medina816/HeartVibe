import React from 'react';
import './card.scss';
import dateIcon from '../../assets/svg/date.svg';
import glassesIcon from '../../assets/svg/glasses.svg';
import locationIcon from '../../assets/svg/location.svg';

function Card({ event }) {
  if (!event) {
    return null;
  }

  const { image, title, date, description, location, category } = event;

  const formattedDate = date ? new Date(date).toLocaleDateString() : 'Дата неизвестна';
  const categoryName = category?.name || 'Без категории';
  const eventLocation = location || 'Локация неизвестна';

  return (
    <div className="card">
      <div className="inside">
        <img src={image || '/assets/svg/event.png'} alt={title || 'Событие'} />
        <button className="btn">
          <img src={dateIcon} alt="Дата" />
          {formattedDate}
        </button>
        <button className="btn2">
          <img src={glassesIcon} alt="Категория" />
          {categoryName}
        </button>
      </div>
      <h2>{title || 'Без названия'}</h2>
      <p>{description || 'Описание отсутствует'}</p>
      <div className="loc">
        <img src={locationIcon} alt="Локация" />
        <span>{eventLocation}</span>
      </div>
      <div className="group-btn">
        <button className="btn3">Записаться</button>
        <button className="btn4">Подробнее</button>
      </div>
    </div>
  );
}

export default Card;
