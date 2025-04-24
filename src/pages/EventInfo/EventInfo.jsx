import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
    fetchSingleEvent,
    clearCurrentEvent,
    fetchCategories,
    fetchEvents
} from '../../app/store/eventss/eventsSlice.js';
import './EventInfo.scss';
import Card from "../../components/Card/Card.jsx";
import dateIcon from "../../assets/svg/date2.svg";
import dateIcon2 from "../../assets/svg/date.svg";
import address from "../../assets/svg/address.svg";
import { BiCategoryAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const EventInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const { currentEvent, status, error } = useSelector((state) => state.events);
    const { events } = useSelector((state) => state.events);
    const { categories } = useSelector((state) => state.categories);
    const currentLanguage = i18n.language;
    const getLocalizedText = (text) => {
        if (!text) return '';
        if (typeof text === 'string') return text;
        return text[currentLanguage] || text.ru || text.en || Object.values(text)[0] || '';
    };
    const formattedDate = currentEvent?.date
        ? new Date(currentEvent.date).toLocaleDateString(currentLanguage, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : t('unknown_date');

    useEffect(() => {
        dispatch(fetchSingleEvent({
            id: id,
            lang: currentLanguage
        }));

        if (categories.length === 0) {
            dispatch(fetchCategories(currentLanguage));
        }
        dispatch(fetchEvents());

        return () => {
            dispatch(clearCurrentEvent());
        };
    }, [dispatch, id, categories.length, currentLanguage]);

    if (status === 'loading') return <div className="loading">{t('loading')}</div>;
    if (error) return <div className="error">{t('error')}: {error}</div>;
    if (!currentEvent) return <div className="not-found">{t('event_not_found')}</div>;

    return (
        <div className="EventInfoContainer">
            <div className="EventInfo">
                <div className="event-details">
                    <img className="EventImage" src={currentEvent.image} alt={getLocalizedText(currentEvent.title)} />
                    <div className="date">
                        <img src={dateIcon} alt={t('date')} />
                        <p>{formattedDate} {t('published')}</p>
                    </div>
                    <h1 className="EventInfoTitle">{getLocalizedText(currentEvent.title)}</h1>
                    <p className="EventDescription">{getLocalizedText(currentEvent.description)}</p>

                    <div className="EventInfoDiv">
                        <BiCategoryAlt className="icon" />
                        <p>{getLocalizedText(currentEvent.category?.name)}</p>
                    </div>

                    <div className="EventInfoDiv">
                        <img className="icon" src={address} alt={t('address')} />
                        <p>{getLocalizedText(currentEvent.location)}</p>
                    </div>

                    <div className="EventInfoDiv">
                        <img className="icon" src={dateIcon2} alt={t('date')} />
                        <p>{formattedDate} {t('published')}</p>
                    </div>
                </div>

                <div className="event-registration">
                    <h2>{t('event_registration')}</h2>
                    <button className="btn-event">{t('sign_up')}</button>
                    <p className="EventNote">
                        {t('registration_agreement')}
                    </p>
                </div>
            </div>

            <div className="SimilarEvents">
                <h2>{t('similar_events')}</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {events
                        .filter((e) => e.id !== currentEvent.id)
                        .slice(0, 9)
                        .map((event) => (
                            <SwiperSlide key={event.id}>
                                <Card
                                    event={event}
                                    categories={categories}
                                    getLocalizedText={getLocalizedText}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default EventInfo;