import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleNews, clearCurrentArticle } from '../../app/store/new/NewsSlice';
import calendar from "../../assets/new/svg/calendar.svg";
import "./NewsInfo.scss";

function NewsInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentArticle, status, error } = useSelector((state) => state.news);
  
  useEffect(() => {
    dispatch(fetchSingleNews(id));
    return () => {
      dispatch(clearCurrentArticle());
    };
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  if (status === 'loading') {
    return <div className="NewsInfoLoading">Загрузка...</div>;
  }

  if (status === 'failed') {
    return <div className="NewsInfoError">Ошибка: {error}</div>;
  }

  if (!currentArticle) {
    return <div className="NewsInfoNotFound">Новость не найдена</div>;
  }

  return (
    <section className='NewsInfoContainer'>
    <div className="NewsInfoCard">
      <div className="NewsInfoHeader">
      <div className="NewsInfoImage">
        <img src={currentArticle.image} alt={currentArticle.title} />
      </div>
        <div className="NewsInfoMeta">
          <div className="NewsInfoDate">
            <img src={calendar} alt="Календарь" />
            <span>{currentArticle.created_at}</span>
          </div>
        </div>
        <h1 className="NewsInfoTitle">{currentArticle.title}</h1>
      </div>
      <div className="NewsInfoContent">
        <p>{currentArticle.content}</p>
      </div>
    </div>
    </section>
  );
}

export default NewsInfo;