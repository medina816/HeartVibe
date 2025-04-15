import React, { useState } from "react";
import logo from "../../assets/svg/logo.svg";
import arrow from "../../assets/svg/arrow.svg";
import { NavLink, Link } from "react-router-dom";
import card1 from '../../assets/image/card1.png';
import "./header.scss";

function Header() {
  const [activeLang, setActiveLang] = useState("RUS");

  return (
    <div className="header container">
      <Link to=''>
        <img className="first" src={logo} alt="Logo" />
      </Link>
      <div className="inside">
        <ul>
          <li>
            <NavLink 
              to='/club'
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              О клубе
            </NavLink>
          </li>
          <Link to={'/all-events'}>
          <li className="nav-link">Мероприятия</li>
          </Link>
          <Link to='/all-News'>
          <li className="nav-link">Новости</li>
          </Link>
          <li className="nav-link">Отзывы</li>
          <li className="nav-link">Контакты</li>
        </ul>
        <div className="btns">
          <div className="lang">
            {["РУС", "КЫР", "ENG"].map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={activeLang === lang ? "active" : ""}
              >
                {lang}
              </button>
            ))}
          </div>
          <button className="title-btn">
            Войти
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Header;