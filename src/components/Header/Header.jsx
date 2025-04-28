import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/svg/logo.svg";
import arrow from "../../assets/svg/arrow.svg";
import "./header.scss";
import {setLanguage} from "../../app/store/languageSlice/languageSlice.js";

function Header() {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    // Конфигурация языков
    const languageConfig = {
        ru: { label: "RUS", key: "RUS" },
        ky: { label: "KYR", key: "KYR" },
        en: { label: "ENG", key: "ENG" }
    };
    const activeLangKey = languageConfig[currentLanguage]?.key || "RUS";

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    const changeLanguage = (langCode) => {
        dispatch(setLanguage(langCode));
    };

    // Навигационные ссылки
    const navLinks = [
        { path: "/club", translationKey: "club" },
        { path: "/all-events", translationKey: "events" },
        { path: "/all-news", translationKey: "news" },
        { path: "/FB", translationKey: "reviews" }
    ];

    return (
        <div className="header container">
            <Link to="/">
                <img className="first" src={logo} alt="Logo" />
            </Link>

            <div className="inside">
                <ul>
                    {navLinks.map(({ path, translationKey }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                {t(translationKey)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="btns">
                    <div className="lang">
                        {Object.entries(languageConfig).map(([code, { label, key }]) => (
                            <button
                                key={code}
                                onClick={() => changeLanguage(code)}
                                className={activeLangKey === key ? "active" : ""}
                                aria-label={`Switch to ${label} language`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <Link to='/sighIn'>
                    <button className="title-btn">
                        {t("login")}
                        <img src={arrow} alt={t("arrow_alt") || "Arrow"} />
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;