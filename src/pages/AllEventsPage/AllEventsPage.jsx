import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchCategories } from '../../app/store/eventss/eventsSlice';
import Card from '../../components/Card/Card';
import './allEventPage.scss';

function AllEventsPage() {
  const dispatch = useDispatch();
  const { events, status: eventsStatus, error: eventsError } = useSelector((state) => state.events);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, eventsStatus, categories]);

  if (eventsStatus === 'loading') return <p>Загрузка...</p>;

  if (eventsStatus === 'failed') return <p>Ошибка при загрузке мероприятий: {eventsError}</p>;

  if (!events || events.length === 0) {
    return <p>Нет доступных мероприятий.</p>;
  }

  return (
    <div className="all-events-page">
      <h2>Все мероприятия</h2>
      <div className="inside">
        {events.map((event) => (
          <Card key={event.id} event={event} categories={categories} />
        ))}
      </div>
    </div>
  );
}

export default AllEventsPage;
