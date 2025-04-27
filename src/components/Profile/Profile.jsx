// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProfile } from '../../app/store/profile/ProfileSlice';
import './Profile.scss';

const Profile = () => {
    // const dispatch = useDispatch();
    // const { user, status, error } = useSelector((state) => state.profile);

    // useEffect(() => {
    //     dispatch(fetchProfile());
    // }, [dispatch]);

    // if (status === 'loading') {
    //     return <div>Загрузка профиля...</div>;
    // }

    // if (error) {
    //     return <div>Ошибка: {error}</div>;
    // }

    return (
        <div className="profile">
            <h1 className="profile__title">Профиль</h1>

            <div className="profile__nav">
                <button className="profile__nav-button active">🏠 Главная</button>
                <button className="profile__nav-button">📄 Сертификаты</button>
                <button className="profile__nav-button">👤 Личные данные</button>
                <button className="profile__nav-button">🔔 Уведомления</button>
                <button className="profile__nav-button exit">⎋ Выход</button>
            </div>

            <div className="profile__welcome">
                {/* <p>Привет, <span>{user?.first_name || 'Гость'}!</span> Спасибо, что ты с нами</p> */}
            </div>

            <div className="profile__stats">
                <div className="profile__stat">
                    {/* <p className="profile__stat-number">{user?.events_attended || 0}</p> */}
                    <p className="profile__stat-label">Посещённых мероприятий</p>
                </div>
                <div className="profile__stat">
                    {/* <p className="profile__stat-number">{user?.volunteer_hours || 0}</p> */}
                    <p className="profile__stat-label">Часов волонтёрства</p>
                </div>
            </div>

            <div className="profile__nearest-event">
                <h2>Ближайшее мероприятие</h2>
                <div className="profile__event-card">
                    <img src="https://img.freepik.com/free-photo/group-happy-children-standing-together_1303-26409.jpg" alt="event" />
                    <div className="profile__event-info">
                        <h3>Книга в подарок: акция для детских домов</h3>
                        <p>Собираем книги для детей из детских домов, подписываем тёплые пожелания и передаём им частичку заботы.</p>
                        <div className="profile__event-details">
                            <p>📍 Городская библиотека, Бишкек</p>
                            <p>🗓 5 мая, 15:00</p>
                            <p>🏷 Экология</p>
                        </div>
                        <div className="profile__event-buttons">
                            <button className="profile__btn profile__btn--green">Подробнее</button>
                            <button className="profile__btn profile__btn--white">Отменить запись</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile__history">
                <h2>История мероприятий</h2>
                <div className="profile__event-card">
                    <img src="https://img.freepik.com/free-photo/cute-puppy-playing-green-grass_155003-3817.jpg" alt="history" />
                    <div className="profile__event-info">
                        <h3>Книга в подарок: акция для детских домов</h3>
                        <p>Собираем книги для детей из детских домов, подписываем тёплые пожелания и передаём им частичку заботы.</p>
                        <div className="profile__event-details">
                            <p>📍 Городская библиотека, Бишкек</p>
                            <p>🗓 5 мая, 15:00</p>
                            <p>🏷 Экология</p>
                        </div>
                        <button className="profile__btn profile__btn--green">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;