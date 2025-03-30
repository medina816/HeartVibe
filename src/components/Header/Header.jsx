import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/svg/logo.svg";
import arrow from "../../assets/svg/arrow.svg";

function Header() {
  const [activeLang, setActiveLang] = useState("RUS");

  return (
    <div className="header container">
      <img className="first" src={logo} alt="Logo" />
      <div className="inside">
        <ul>
          <li>О клубе</li>
          <li>Мероприятия</li>
          <li>Новости</li>
          <li>Отзывы</li>
          <li>Контакты</li>
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
