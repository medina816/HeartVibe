import React, { useEffect } from 'react';
import "./FeedbackFromVolunteers.scss";
import arrowRight from "../../assets/FeedbackFromVolunteers/svg/arrowRight.svg";
import FeedbackFromVolunteersCard from '../Card/FeedbackFromVolunteersCard/FeedbackFromVolunteersCard';
import add from "../../assets/FeedbackFromVolunteers/svg/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from '../../app/store/reviews/reviewSlice';
import { Link } from 'react-router-dom';

function FeedbackFromVolunteers() {
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка отзывов...</p>;
  if (status === "failed") return <p>Ошибка: {error}</p>;

  return (
    <section>
      <div className='container'>
        <div className='feedbackTitleContainer'>
          <h1 className='feedbackTitle'>Отзывы волонтёров</h1>
          <div className='AllReviewsGrid'>
            <h6 className='AllReviews'>Все отзывы</h6>
            <img src={arrowRight} alt="Стрелка вправо" />
          </div>
        </div>
        <div className='FeedbackFromVolunteersCardsGrid'>
          {reviews.slice(0, 5).map((review) => (
            <FeedbackFromVolunteersCard key={review.id} review={{
              id: review.id,
              name: review.author,
              avatar: review.avatar,
              rating: review.rating,
              reviewsText: `${review.text}`,
              date: new Date(review.created_at).toLocaleDateString('ru-RU'),
            }} />
          ))}
          <Link to='/fb'>
          <div className='LeaveFeedback'>
            <h3>Оставить отзыв</h3>
            <img src={add} alt="" />
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeedbackFromVolunteers;  