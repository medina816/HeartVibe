import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../app/store/new/NewsSlice";
import "./News.scss";
import arrowRight from "../../assets/FeedbackFromVolunteers/svg/arrowRight.svg";
import calendar from "../../assets/new/svg/calendar.svg"

function News() {
  const dispatch = useDispatch();
  const { news, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (status === "failed") return <p>Ошибка: {error}</p>;

  return (
    <section className="Newscontainer">
      <div className="newsTitle">
        <h1>Новости</h1>
        <div className="AllReviewsGrid">
          <h6 className="AllReviews">Все новости</h6>
          <img src={arrowRight} alt="Стрелка вправо" />
        </div>
      </div>
      <div className="NewsCardGrid">
        {news.slice(0, 3).map((item) => (
          <div key={item.id} className="NewsCard">
            <div className="NewsImage">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="NewsTextContant">
              <div className="dataContainer">
              <img src={calendar} alt="Календарь" /> 
              <p className="data">{item.created_at}</p>
              </div>
              <h3 className="title">{item.title}</h3>
              <p className="Content">{item.content}</p>
              <button className="ReadMorebtn">Читать подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;