import React, { useEffect } from 'react';
import { fetchNews } from '../../app/store/new/NewsSlice';
import NewsCard from '../../components/Card/newsCard/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import "./allNews.scss"

function AllNews() {
    const dispatch = useDispatch();
    const { news, status: newsStatus, error: newsError } = useSelector((state) => state.news);
    
    useEffect(() => {
        if (newsStatus === 'idle') {
            dispatch(fetchNews());
        }
    }, [dispatch, newsStatus]);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    if (newsStatus === 'loading') return <p>Загрузка...</p>;
    if (newsStatus === 'failed') return <p>Ошибка при загрузке новостей: {newsError}</p>;
    if (!news || news.length === 0) return <p>Нет доступных новостей.</p>;

    return (
        <section className="Newscontainer">
            <h1 className='newsH1'>Новости</h1>
            <div className="NewsCardGrid"> 
                {news.map((item) => (
                    <NewsCard key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
}

export default AllNews;
