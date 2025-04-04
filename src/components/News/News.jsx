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

  if (status === "loading") return <p>Загрузка...</p>;
  if (status === "failed") return <p>Ошибка: {error}</p>;

  return (
    <section className="Newscontainer">
      <div className="newsTitle">
        <h1>Новости</h1>
        <div className="AllReviewsGrid">
          <h6 className="AllReviews"><Link to="all-News">Все новости
          </Link></h6>
          <img src={arrowRight} alt="Стрелка вправо" />
        </div>
      </div>
      <div className="NewsCardGrid">
        {news.slice(0, 3).map((news) => (
          <NewsCard key={news.id} data={news}/>
        ))}
      </div>
    </section>
  );
}

export default News;