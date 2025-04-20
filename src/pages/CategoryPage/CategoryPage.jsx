import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './categoryPage.scss';
import { fetchEvents, fetchCategories } from '../../app/store/eventss/eventsSlice';
import { BiCategoryAlt } from "react-icons/bi";

function CategoryPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const { events, status: eventsStatus } = useSelector((state) => state.events);
  const { categories, status: categoriesStatus } = useSelector((state) => state.categories);

  const categoryIdNumber = Number(categoryId);

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, eventsStatus, categoriesStatus]);

  const category = categories.find(cat => cat.id === categoryIdNumber);
  const filteredEvents = events.filter(event => event.category?.id === categoryIdNumber);

  if (eventsStatus === 'loading' || categoriesStatus === 'loading') {
    return <div className="category-page"><p>Загрузка...</p></div>;
  }

  if (eventsStatus === 'failed' || categoriesStatus === 'failed') {
    return <div className="category-page"><p>Ошибка загрузки данных</p></div>;
  }

  return (
    <div className="category-page">
      <div className="category-title">
        <BiCategoryAlt className="category-icon" />
        <h2>{category ? category.name : 'Категория'}</h2>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="events-list">
          {filteredEvents.map(event => (
            <Card key={event.id} event={event} categories={categories} />
          ))}
        </div>
      ) : (
        <p>Нет мероприятий в этой категории.</p>
      )}
    </div>
  );
}

export default CategoryPage;
