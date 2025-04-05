import React from "react";
import "./News.scss";
import arrowRight from "../../assets/FeedbackFromVolunteers/svg/arrowRight.svg";
import NewsCard from "../Card/newsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../app/store/new/NewsSlice";
import { Link } from "react-router-dom";

function News() {
  const dispatch = useDispatch();
  const { news, status, error } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === "loading") return <div className="news-loading">Загрузка...</div>;
  if (status === "failed") return <div className="news-error">Ошибка: {error}</div>;

  return (
    <section className="news-section">
      <div className="news-header">
        <h1 className="news-title">Новости</h1>
        <Link to="all-News" className="news-all-link">
          <span>Все новости</span>
          <img src={arrowRight} alt="Стрелка вправо" />
        </Link>
      </div>
      
      <div className="news-grid">
        {news.slice(0, 3).map((item) => (
          <NewsCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}

export default News;