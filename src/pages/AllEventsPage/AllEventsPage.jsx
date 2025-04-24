import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchEvents, fetchCategories } from '../../app/store/eventss/eventsSlice';
import Card from '../../components/Card/Card';
import { BiCategoryAlt } from "react-icons/bi";
import './allEventPage.scss';

function AllEventsPage() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Получаем текущий язык из Redux
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const { events, status: eventsStatus, error: eventsError } = useSelector((state) => state.events);
    const { categories, status: categoriesStatus } = useSelector((state) => state.categories);
    const getLocalizedText = (text) => {
        if (!text) return '';
        if (typeof text === 'string') return text;
        return text[currentLanguage] || text.ru || text.en || Object.values(text)[0] || '';
    };

    useEffect(() => {
        dispatch(fetchEvents());
        dispatch(fetchCategories());
    }, [dispatch, currentLanguage]);

    if (eventsStatus === 'loading' || categoriesStatus === 'loading') {
        return <p>{t('loading')}</p>;
    }

    if (eventsStatus === 'failed') {
        return <p>{t('events_load_error')}: {eventsError?.message || eventsError}</p>;
    }

    if (!events || events.length === 0) {
        return <p>{t('no_events')}</p>;
    }

    return (
        <div className="all-events-page">
            <div className="text">
                <h2>{t('all_events')}</h2>
            </div>
            <div className="categories">
                <div className="categories-buttons">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className="category-btn"
                            onClick={() => navigate(`/category/${category.id}`)}
                        >
                            <BiCategoryAlt className="category-icon" />
                            {getLocalizedText(category.name)}
                        </button>
                    ))}
                </div>
            </div>
            <div className="inside">
                {events.map((event) => (
                    <Card
                        key={event.id}
                        event={event}
                        categories={categories}
                        getLocalizedText={getLocalizedText}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllEventsPage;