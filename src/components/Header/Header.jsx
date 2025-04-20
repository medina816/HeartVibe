import React, {useState, useEffect} from "react";
import logo from "../../assets/svg/logo.svg";
import arrow from "../../assets/svg/arrow.svg";
import {NavLink, Link} from "react-router-dom";
import "./header.scss";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const [activeLang, setActiveLang] = useState("RUS");

    useEffect(() => {
        const currentLang = i18n.language.toUpperCase();
        setActiveLang(currentLang === "KG" ? "KYR" : currentLang === "RU" ? "RUS" : currentLang);
    }, [i18n.language]);

    const changeLanguage = (language) => {
        let lng;
        switch(language) {
            case "RUS": lng = "ru"; break;
            case "KYR": lng = "kg"; break;
            case "ENG": lng = "en"; break;
            default: lng = "ru";
        }
        i18n.changeLanguage(lng);
    };

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
                            {t("club")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all-events'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {t("events")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all-news'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {t("news")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all-reviews'
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {t("reviews")}
                        </NavLink>
                    </li>
                </ul>
                <div className="btns">
                    <div className="lang">
                        {["RUS", "KYR", "ENG"].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => changeLanguage(lang)}
                                className={activeLang === lang ? "active" : ""}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                    <button className="title-btn">
                        {t("login")}
                        <img src={arrow} alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;