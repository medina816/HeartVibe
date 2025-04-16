import React from 'react';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__circle-glow" />
        <div className="notfound__number">404</div>
        <div className="notfound__message">
          <h1>Упс! Такой страницы нет</h1>
          <p>Кажется, вы потерялись. Давайте вернёмся на главную.</p>
          <Link to="/">  
          <div className="notfound__button">На главную</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
