import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchCategories } from '../../app/store/eventss/eventsSlice';
import { Link } from 'react-router-dom'; 
import right from '../../assets/svg/right.svg';
import Card from '../Card/Card';
import './event.scss';

function EventsList() {
  const dispatch = useDispatch();
  const { events, status: eventsStatus, error: eventsError } = useSelector((state) => state.events);
  const { categories, status: categoriesStatus, error: categoriesError } = useSelector((state) => state.categories);

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, eventsStatus, categoriesStatus]);

  if (eventsStatus === 'loading' || categoriesStatus === 'loading') return <p>Загрузка...</p>;
  if (eventsStatus === 'failed') return <p>Ошибка при загрузке мероприятий: {eventsError}</p>;
  if (categoriesStatus === 'failed') return <p>Ошибка при загрузке категорий: {categoriesError}</p>;

  if (!events || events.length === 0) {
    return <p>Нет доступных мероприятий.</p>;
  }

  const displayedEvents = events.slice(0, 3);

  return (
    <div className='list'>
      <div className='text'>
        <h2>Ближайшие мероприятия</h2>
          <Link to="/all-events">
        <p>Все мероприятия
            <img src={right} alt="Right arrow" />
        </p>
          </Link>
      </div>
      <div className='inside'>
        {displayedEvents.map((event) => (
          <Card key={event.id} event={event} categories={categories} />
        ))}
      </div>
    </div>
  );
}

export default EventsList;
