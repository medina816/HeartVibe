import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchEvents, fetchCategories } from '../../app/store/eventss/eventsSlice';
import Card from '../../components/Card/Card';
import { BiCategoryAlt } from "react-icons/bi";
import './allEventPage.scss';

function AllEventsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  if (!events || events.length === 0) return <p>Нет доступных мероприятий.</p>;

  return (
    <div className="all-events-page">
      <h2>Все мероприятия</h2>

      {/* Категории с кнопками */}
      <div className="categories">
        <div className="categories-buttons">
          {categories.map((category) => (
            <button 
              key={category.id} 
              className="category-btn" 
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <BiCategoryAlt className="category-icon" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Карточки мероприятий */}
      <div className="inside">
        {events.map((event) => (
          <Card key={event.id} event={event} categories={categories} />
        ))}
      </div>
    </div>
  );
}

export default AllEventsPage;
