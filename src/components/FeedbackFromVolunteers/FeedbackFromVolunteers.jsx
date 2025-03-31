import React from 'react'
import "./FeedbackFromVolunteers.scss"
import arrowRight from "../../assets/FeedbackFromVolunteers/svg/arrowRight.svg"
import FeedbackFromVolunteersCard from '../Card/FeedbackFromVolunteersCard/FeedbackFromVolunteersCard';
import bolot from "../../assets/FeedbackFromVolunteers/image/Bolot.png"
import rating from "../../assets/FeedbackFromVolunteers/svg/Rating.svg";
import add from "../../assets/FeedbackFromVolunteers//svg/add.svg"

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
                    {reviews.map((review) => (
                        <FeedbackFromVolunteersCard key={review.id} review={review} />
                    ))}
                    <div className='LeaveFeedback'>
                        <h3>Оставить отзыв</h3>
                        <img src={add} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackFromVolunteers