import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../app/store/reviews/reviewSlice';
import FeedbackFromVolunteersCard from '../Card/FeedbackFromVolunteersCard/FeedbackFromVolunteersCard';
import VectorLeft from '../../assets/svg/vectorLeft.svg';
import VectorRight from '../../assets/svg/vectorRight.svg';
import docIcon from '../../assets/svg/doc.svg';
import trashIcon from '../../assets/svg/trash.svg';
import phoneIcon from '../../assets/svg/phone.svg';
import './leaveFB.scss';

function LeaveFeedBack() {
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // ДОБАВИЛИ состояние для выбранного файла

  const reviewsPerPage = 6;

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const newPages = [];
    for (let i = 0; i < totalPages; i++) {
      newPages.push(reviews.slice(i * reviewsPerPage, (i + 1) * reviewsPerPage));
    }
    setPages(newPages);
  }, [reviews]);

  if (status === 'loading') return <p>Загрузка отзывов...</p>;
  if (status === 'failed') return <p>Ошибка: {error}</p>;

  const totalPages = pages.length;
  const visibleReviews = pages[currentPage - 1] || [];

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="leaveFeedbackContainer">
      <h1>Все отзывы</h1>

      <div className="FeedbackFromVolunteersCardsGrid">
        {visibleReviews.map((review) => (
          <FeedbackFromVolunteersCard
            key={review.id}
            review={{
              id: review.id,
              name: review.author,
              avatar: review.avatar,
              rating: review.rating,
              reviewsText: review.text,
              date: new Date(review.created_at).toLocaleDateString('ru-RU'),
            }}
          />
        ))}
      </div>

      <div className="countPages">
        <button onClick={handlePrev}>
          <img src={VectorLeft} alt="Стрелка влево" />
        </button>

        {pages.map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext}>
          <img src={VectorRight} alt="Стрелка вправо" />
        </button>
      </div>

      <div className="newFB">
        <h1>Напишите отзыв</h1>

        <div className="inputWithIcon">
          <input type="text" placeholder="Ваше имя" />
          <p>имя</p>
          <img src={phoneIcon} className="phone" alt="Телефон" />
        </div>

        <div className="reviews">
          <textarea
            placeholder="Ваш отзыв"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            maxLength={500}
          />
          <p>{feedbackText.length}/500</p>
        </div>

        <div className="text">
          <h3>Выберите фото</h3>
          <p>
            Данное фото будет видно другим пользователям. Размер файла не больше 5 МБ с разрешением JPEG или PNG
          </p>
        </div><div className="bottom">
          <div className="left">
            <img src={docIcon} alt="Документ" />
            <h3>{selectedFile ? selectedFile.name : 'Файл не выбран'}</h3> {/* тут имя файла */}
          </div>

          <div className="right">
            {/* input type="file" спрятан */}
            <input
              id="fileInput"
              type="file"
              accept="image/jpeg, image/png"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button onClick={() => document.getElementById('fileInput').click()}>Выбрать</button>
            <button className="delete" onClick={handleDeleteFile}>
              <img src={trashIcon} alt="Удалить" />
            </button>
          </div>
        </div>

        <button>Отправить</button>
      </div>
    </div>
  );
}

export default LeaveFeedBack;