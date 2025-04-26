import React from "react";
import "./News.scss";
import arrowRight from "../../assets/FeedbackFromVolunteers/svg/arrowRight.svg";
import NewsCard from "../Card/newsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../app/store/new/NewsSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function News() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { news, status, error } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === "loading") return <p>{t("loading")}</p>;
  if (status === "failed") return <p>{t("error")}: {error}</p>;

  return (
    <div className="news">
      <div className="text">
        <h2>{t("News")}</h2>
        <Link to="/all-News">
          <p>
            {t("AllNews")}
            <img src={arrowRight} alt="→" />
          </p>
        </Link>
      </div>
      <div className="scroll-wrapper">
        <div className="scroll-inside">
          {news.slice(0, 6).map((item) => (
            <div className="scroll-card" key={item.id}>
              <NewsCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
