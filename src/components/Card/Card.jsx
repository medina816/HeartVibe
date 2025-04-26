import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaFirefox } from "react-icons/fa";
import calendar from "../../assets/new/svg/calendar.svg";
import locationIcon from "../../assets/svg/location.svg";
import dateIcon from "../../assets/svg/date.svg";
import "./Card.scss";

function Card({ event }) {
    const { t, i18n } = useTranslation();

    if (!event) return null;

    // Локализация текстов
    const getLocalizedText = (field) => {
        if (!field) return '';
        return field[i18n.language] || field['en'] || '';
    };

    const formattedDate = event.date
        ? new Date(event.date).toLocaleDateString(t('date_locale'))
        : t('date_unknown');

    const title = getLocalizedText(event.title) || t('no_title');
    const description = getLocalizedText(event.description) || t('no_description');
    const location = getLocalizedText(event.location) || t('location_unknown');
    const categoryName = getLocalizedText(event.category?.name) || t('no_category');

    return (
        <div className="Card">
            <div className="CardImage">
                <img
                    src={event.image || '/assets/svg/event.png'}
                    alt={title}
                />

                {/* Кнопка с датой на изображении */}
                <button className="btn">
                    <img src={dateIcon} alt={t('date')} />
                    {formattedDate}
                </button>

                {/* Кнопка перехода по категории */}
                {event.category?.id && (
                    <Link to={`/category/${event.category.id}`}>
                        <button className="btn2">
                            <FaFirefox style={{ color: '#34a853' }} />
                            {categoryName}
                        </button>
                    </Link>
                )}
            </div>

            <div className="CardTextContent">
                <h3 className="title">{title}</h3>
                <p className="content">{description}</p>

                <div className="infoContainer">
                    <div className="dataContainer">
                        <img src={calendar} alt={t('calendar')} />
                        <p className="data">{formattedDate}</p>
                    </div>

                    <div className="locationContainer">
                        <img src={locationIcon} alt={t('location')} />
                        <span>{location}</span>
                    </div>
                </div>

                <div className="group-btn">
                    <button className="btn3">{t('sign_up')}</button>
                    <Link to={`/event/${event.id}`}>
                        <button className="btn4">{t('details')}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
