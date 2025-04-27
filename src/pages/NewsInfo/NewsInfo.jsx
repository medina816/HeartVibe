import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSingleNews, clearCurrentArticle,} from '../../app/store/new/NewsSlice';
import calendar from '../../assets/svg/calendar.svg';   
import "./NewsInfo.scss";
import NewsCard from "../../components/Card/newsCard/NewsCard.jsx";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function NewsInfo() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {currentArticle, status, error} = useSelector((state) => state.news);
    const {news, status: newsStatus, error: newsError} = useSelector((state) => state.news);

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
                        <img src={currentArticle.image} alt={currentArticle.title}/>
                    </div>
                    <div className="NewsInfoMeta">
                        <div className="NewsInfoDate">
                            <img src={calendar} alt="Календарь"/>
                            <span>{currentArticle.created_at}</span>
                        </div>
                    </div>
                    <h1 className="NewsInfoTitle">{currentArticle.title}</h1>
                </div>
                <div className="NewsInfoContent">
                    <p>{currentArticle.content}</p>
                </div>
            </div>
            <div className="NewsInfoContent2">
                {newsStatus === 'succeeded' && news.length > 0 && (
                    <>
                        <h2>Похожие новости</h2>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={3}
                            pagination={{clickable: true}}
                            style={{paddingBottom: '30px'}}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {news
                                .filter(item => item.id !== currentArticle.id)
                                .slice(0, 9)
                                .map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <NewsCard data={item}/>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </>
                )}
            </div>
        </section>
    );
}

export default NewsInfo;