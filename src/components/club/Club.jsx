import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTeams} from "../../app/store/team/teamSlice";

import volonteers from "../../assets/image/volonteers.png";
import lifes from "../../assets/image/lifes.png";
import card1 from "../../assets/image/card1.png";
import card2 from "../../assets/image/card2.png";
import "./club.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';
import {FaTimes} from "react-icons/fa";

function Club() {
    const dispatch = useDispatch();
    const {teams, status, error} = useSelector((state) => state.teams);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleCardClick = (member) => {
        setSelectedMember(member);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedMember(null);
    };

    useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);

    return (
        <div className="club-container">
            <div className="about-club">
                <h2>О клубе</h2>
                <div className="text1">
                    <h3>Наша миссия</h3>
                    <p>
                        Наш проект создан, чтобы объединить людей, готовых помогать другим, и тех, кто нуждается в
                        поддержке. Мы верим, что каждый может внести вклад в общество — будь то забота о детях, помощь
                        пожилым людям, защита окружающей среды или поддержка животных. </p>
                </div>
            </div>

            <div className="background">
                <img src={lifes} alt="lifes" className="lifes"/>
                <img src={volonteers} alt="volunteers" className="volonteers"/>
                <button className="btn1">
                    Развивать культуру <br/> добрых дел в обществе
                </button>
                <button className="btn2">
                    Создавать новые проекты, которые <br/> действительно меняют мир.
                </button>
                <button className="btn3">Сделать волонтёрство <br/> доступным каждому</button>
                <button className="btn4">
                    Поддерживать волонтёров и организации,<br/> предоставляя им платформу<br/>
                    для взаимодействия.
                </button>
            </div>

            <div className="card1">
                <img src={card1} alt="card1"/>
                <div className="txt">
                    <div>
                        <h2>История создания</h2>
                        <p>Идея создания нашего проекта родилась из простого желания помочь. Мы начали с небольших
                            инициатив: сбор одежды для нуждающихся, экологические акции, бесплатные образовательные
                            курсы. Со временем количество желающих участвовать росло, и стало ясно — нужен удобный
                            сервис, объединяющий волонтёров и тех, кому нужна помощь.</p>
                    </div>
                </div>
            </div>

            <div className="card2">
                <img src={card2} alt="card2"/>
                <div className="txt2">
                    <div>
                        <h2>История создания</h2>
                        <p>
                            Так появилась наша платформа — место, где каждый может найти проект по душе, получить
                            поддержку и стать частью чего-то большего. Сегодня мы продолжаем развиваться, расширяем
                            список программ и помогаем всё большему количеству людей.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom-part">
                <h2>Наша команда</h2>
                <div className="out">
                    {status === "loading" && <p>Загрузка...</p>}
                    {status === "failed" && <p>Ошибка: {error}</p>}
                    {status === "succeeded" && teams.length > 0 && (
                        <Swiper
                            slidesPerView={1}
                            loop={true} // Зацикливание слайдов
                            autoplay={{
                                delay: 2500, // Автопрокрутка слайдов
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {slidesPerView: 1},
                                768: {slidesPerView: 2},
                                1024: {slidesPerView: 4},
                            }}

                        >
                            {teams.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div
                                        className="members"
                                        onClick={() => handleCardClick(member)} // Используем onClick
                                    >
                                        <div>
                                            <img
                                                src={member.photo || "https://via.placeholder.com/150"}
                                                alt={member.full_name}
                                            />
                                        </div>
                                        <h3>{member.full_name}</h3>
                                        <p>{member.position}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                {modalOpen && selectedMember && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button className="close-button" onClick={handleCloseModal}>
                                <FaTimes size={20} color="rgba(52, 168, 83, 1);" />
                            </button>
                            <h2>{selectedMember.full_name}</h2>
                            <div className="modal-content">
                                <div>
                                    <img
                                        src={selectedMember.photo || "https://via.placeholder.com/150"}
                                        alt={selectedMember.full_name}
                                    />
                                    <p>{selectedMember.position}</p>
                                </div>
                                <div>
                                    <p>{selectedMember.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Club;
