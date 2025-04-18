import React, {useState} from "react";
import logo from "../../assets/svg/logo.svg";
import arrow from "../../assets/svg/arrow.svg";
import {NavLink, Link} from "react-router-dom";
import card1 from '../../assets/image/card1.png';
import "./header.scss";

function Header() {
    const [activeLang, setActiveLang] = useState("RUS");

    return (
        <div className="header container">
            <Link to=''>
                <img className="first" src={logo} alt="Logo"/>
            </Link>
            <div className="inside">
                <ul>
                    <li>
                        <NavLink
                            to='/club'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            О клубе
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all-events'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Мероприятия
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all-News'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Новости
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all-reviews'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Отзывы
                        </NavLink>
                    </li>

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
                        <img src={arrow} alt="Arrow"/>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Header;