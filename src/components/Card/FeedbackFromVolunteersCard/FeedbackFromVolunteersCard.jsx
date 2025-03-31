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
        <div className="reviewsText">
        <p>{review.reviewsText}</p>
        </div>
        <div  className="date">
        <p>{review.date}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackFromVolunteersCard;
