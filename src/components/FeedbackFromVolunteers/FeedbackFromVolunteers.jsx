import React, { useState, useEffect } from 'react';
import "./FeedbackFromVolunteers.scss"
import arrowRight from "../../assets/FeedbackFromVolunteers/svg/arrowRight.svg"
import FeedbackFromVolunteersCard from '../Card/FeedbackFromVolunteersCard/FeedbackFromVolunteersCard';
import bolot from "../../assets/FeedbackFromVolunteers/image/Bolot.png"
import rating from "../../assets/FeedbackFromVolunteers/svg/Rating.svg";
import add from "../../assets/FeedbackFromVolunteers//svg/add.svg"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const reviews = [
  {
    id: 1,
    name: "Болот, 23 года",
    avatar: bolot,
    rating: rating,
    reviewsText:
      '"Участвовать в проектах HeartVibe — одно из лучших решений в моей жизни! Столько эмоций, новых знакомств и добра!"',
    date: "5 мая 2024",
  },
  {
    id: 1,
    name: "Болот, 23 года",
    avatar: bolot,
    rating: rating,
    reviewsText:
      '"Участвовать в проектах HeartVibe — одно из лучших решений в моей жизни! Столько эмоций, новых знакомств и добра!"',
    date: "5 мая 2024",
  },
  {
    id: 1,
    name: "Болот, 23 года",
    avatar: bolot,
    rating: rating,
    reviewsText:
      '"Участвовать в проектах HeartVibe — одно из лучших решений в моей жизни! Столько эмоций, новых знакомств и добра!"',
    date: "5 мая 2024",
  },
  {
    id: 1,
    name: "Болот, 23 года",
    avatar: bolot,
    rating: rating,
    reviewsText:
      '"Участвовать в проектах HeartVibe — одно из лучших решений в моей жизни! Столько эмоций, новых знакомств и добра!"',
    date: "5 мая 2024",
  },
  {
    id: 1,
    name: "Болот, 23 года",
    avatar: bolot,
    rating: rating,
    reviewsText:
      '"Участвовать в проектах HeartVibe — одно из лучших решений в моей жизни! Столько эмоций, новых знакомств и добра!"',
    date: "5 мая 2024",
  },

];
function FeedbackFromVolunteers() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize(); 
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  return (
    <section className='FeedbackFromVolunteersContainer'>
      <div className='feedbackTitleContainer'>
      <h1 className='feedbackTitle'>
          {isMobile ? "Отзывы" : "Отзывы волонтёров"}
        </h1>
        <div className='AllReviewsGrid'>
          <h6 className='AllReviews'><Link to={"reviews"}>Все отзывы</Link></h6>
          <img src={arrowRight} alt="Стрелка вправо" />
        </div>
      </div>
      <div className="desktopGrid">
        <div className='FeedbackFromVolunteersCardsGrid'>
          {reviews.map((review) => (
            <FeedbackFromVolunteersCard key={review.id} review={review} />
          ))}
          <div className='LeaveFeedback'>
            <h3>Оставить отзыв</h3>
            <img src={add} alt="" />
          </div>
        </div>
      </div>

      <div className="mobileSwiper">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={false}
          breakpoints={{
            480: {
              slidesPerView: 1.3
            },
            640: {
              slidesPerView: 1.5
            }
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <FeedbackFromVolunteersCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className='LeaveFeedbackMobile'>
          <h3>Оставить отзыв</h3>
          <img src={add} alt="Добавить отзыв" />
        </div>
      </div>
    </section>
  )
}

export default FeedbackFromVolunteers