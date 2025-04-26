import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../app/store/new/NewsSlice';
import NewsCard from '../../components/Card/newsCard/NewsCard';
import './allNews.scss';
import { useTranslation } from "react-i18next";

function AllNews() {
    const dispatch = useDispatch();
    const { news, status: newsStatus, error: newsError } = useSelector((state) => state.news);
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 9;

    useEffect(() => {
        dispatch(fetchNews(currentLanguage));
    }, [dispatch, currentLanguage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const getLocalizedText = (text) => {
        if (!text) return '';
        if (typeof text === 'string') return text;
        return text[currentLanguage] || text['ru'] || text['en'] || Object.values(text)[0] || '';
    };

    if (newsStatus === 'loading') return <p>{t('loading')}</p>;
    if (newsStatus === 'failed') return <p>{t('error')}: {newsError}</p>;
    if (!news || news.length === 0) return <p>{t('no_news')}</p>;

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const totalPages = Math.ceil(news.length / newsPerPage);

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <section className="news-section">
            <h1 className="newsH1">{t('news')}</h1>

            <div className="news-grid">
                {currentNews.map((item) => (
                    <NewsCard 
                        key={item.id} 
                        data={{
                            ...item,
                            title: getLocalizedText(item.title),
                            description: getLocalizedText(item.description)
                        }}
                    />
                ))}
            </div>

            <div className="pagination">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="arrow-button"
                >
                    &#x25C0;
                </button>

                {renderPageNumbers().map((page, index) => (
                    page === '...' ? (
                        <span key={index} className="dots">...</span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    )
                ))}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="arrow-button"
                >
                    &#x25B6;
                </button>
            </div>
        </section>
    );
}

export default AllNews;