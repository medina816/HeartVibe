import React from "react";
import "./FeedbackFromVolunteersCard.scss"

function FeedbackFromVolunteersCard({ review }) {
    return (
        <div className="FeedbackFromVolunteersCard">
            <div className="FeedbackFromVolunteersCardContant">
                <div className="avatarContainer">
                    <img src={review.avatar} className="avatar" alt={review.name} />
                    <div>
                        <h3>{review.name}</h3>
                        <img src={review.rating} alt="Рейтинг" />
                    </div>
                </div>
                <p className="reviewsText">{review.reviewsText}</p>
                <p className="date">{review.date}</p>
            </div>
        </div>
    );
}

export default FeedbackFromVolunteersCard;