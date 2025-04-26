import React from "react";
import "./FeedbackFromVolunteersCard.scss";
import heartIcon from '../../../assets/svg/heartIcon.svg'; 
import defaultAvatar from '../../../assets/image/defaultAvatar.png';

function FeedbackFromVolunteersCard({ review }) {
  const hearts = Array.from({ length: review.rating }, (_, index) => (
    <img key={index} src={heartIcon} alt="Heart" className="heartIcon" />
  ));

  return (
    <div className="FeedbackFromVolunteersCard">
      <div className="FeedbackFromVolunteersCardContant">
        <div className="avatarContainer">
          <img
            src={review.avatar?.trim() ? review.avatar : defaultAvatar}
            className="avatar"
            alt={review.name}
          />
          <div>
            <h3>{review.name}</h3>
            <div className="rating">{hearts}</div> 
          </div>
        </div>
        <p className="reviewsText">{review.reviewsText}</p>
        <p className="date">{review.date}</p>
      </div>
    </div>
  );
}

export default FeedbackFromVolunteersCard;
