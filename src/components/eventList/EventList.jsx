import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchCategories } from '../../app/store/eventss/eventsSlice';
import { Link } from 'react-router-dom';
import right from '../../assets/svg/right.svg';
import Card from '../Card/Card';
import './event.scss';
import { useTranslation } from "react-i18next";

function EventsList() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { events, status: eventsStatus, error: eventsError } = useSelector((state) => state.events);
  const { categories, status: categoriesStatus, error: categoriesError } = useSelector((state) => state.categories);

  useEffect(() => {
    if (eventsStatus === 'idle') dispatch(fetchEvents());
    if (categoriesStatus === 'idle') dispatch(fetchCategories());
  }, [dispatch, eventsStatus, categoriesStatus]);

  if (eventsStatus === 'loading' || categoriesStatus === 'loading') return <p>{t("loading")}</p>;
  if (eventsStatus === 'failed') return <p>{t("error")}: {eventsError}</p>;
  if (categoriesStatus === 'failed') return <p>{t("error")}: {categoriesError}</p>;
  if (!events || events.length === 0) return <p>{t("noEvents")}</p>;

  return (
    <div className='list'>
      <div className='text'>
        <h2>{t("UpcomingEvents")}</h2>
        <Link to="/all-events">
          <p>
            {t("AllEvents")}
            <img src={right} alt="→" />
          </p>
        </Link>
      </div>
      <div className='scroll-wrapper'>
        <div className='scroll-inside'>
          {events.slice(0, 6).map((event) => (
            <div className="scroll-card" key={event.id}>
              <Card event={event} categories={categories} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsList;