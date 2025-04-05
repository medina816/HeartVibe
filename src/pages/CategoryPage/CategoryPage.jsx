import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './categoryPage.scss';

function CategoryPage() {
  const { categoryId } = useParams();
  const { events } = useSelector((state) => state.events);
  const { categories } = useSelector((state) => state.categories);

  // Преобразуем categoryId в число
  const categoryIdNumber = Number(categoryId);

  // Ищем категорию по id
  const category = categories.find(cat => cat.id === categoryIdNumber);

  // Фильтруем мероприятия по categoryId
  const filteredEvents = events.filter(event => event.category.id === categoryIdNumber);

  return (
    <div className="category-page">
      <h2>{category ? category.name : 'Категория'}</h2>

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
