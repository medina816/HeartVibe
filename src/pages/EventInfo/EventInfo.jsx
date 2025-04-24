import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {fetchSingleEvent, clearCurrentEvent, fetchCategories} from '../../app/store/eventss/eventsSlice.js';
import './EventInfo.scss';
import Card from "../../components/Card/Card.jsx";
import dateIcon from "../../assets/svg/date2.svg";
import dateIcon2 from "../../assets/svg/date.svg";
import address from "../../assets/svg/address.svg";
import { BiCategoryAlt } from "react-icons/bi";

const EventInfo = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {currentEvent, status, error} = useSelector((state) => state.events);
    const {events} = useSelector((state) => state.events);
    const {categories} = useSelector((state) => state.categories);
    const formattedDate = currentEvent?.date
        ? new Date(currentEvent.date).toLocaleDateString()
        : 'Дата неизвестна';

    useEffect(() => {
        dispatch(fetchSingleEvent(id));

        // Load categories if not already loaded
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }

        return () => {
            dispatch(clearCurrentEvent());
        };
    }, [dispatch, id, categories.length]);

    if (status === 'loading') return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (!currentEvent) return <div>Событие не найдено</div>;

    return (<div className="EventInfoContainer">
        <div className="EventInfo">
            <div>
                <img className="EventImage" src={currentEvent.image} alt=""/>
                <div className="date">
                    <img src={dateIcon} alt="Дата"/>
                    <p>{formattedDate} опубликовано</p>
                </div>
                <h1 className="EventInfoTitle">{currentEvent.title}</h1>
                <p className="EventDescription">{currentEvent.description}</p>
                <div className="EventInfoDiv">
                    <BiCategoryAlt className="icon" />
                    <p>{currentEvent.category.name}</p>
                </div>
                <div className="EventInfoDiv">
                    <img className="icon" src={address} alt="Дата"/>
                    <p>{currentEvent.location}</p>
                </div>
                <div className="EventInfoDiv">
                    <img className="icon" src={dateIcon2} alt="Дата"/>
                    <p>{formattedDate} опубликовано</p>
                </div>
            </div>
            <div>
                <h2>Запись на мероприятия</h2>
                <button className="btn-event">Записаться</button>
                <p className="EventNote">
                    Нажимая “Записаться”, вы соглашаетесь с обработкой ваших личных данных
                </p>


                {/*{currentEvent.participants && currentEvent.participants.length > 0 && (*/}
                {/*    <div className="EventParticipants">*/}
                {/*        <h3>Участники ({currentEvent.participants.length})</h3>*/}
                {/*        <div className="ParticipantList">*/}
                {/*            {currentEvent.participants.slice(0, 12).map((p) => (*/}
                {/*                <div className="Participant" key={p.id}>*/}
                {/*                    <img src={p.avatar} alt={p.name} />*/}
                {/*                    <span>{p.name}</span>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>

        </div>

        <div className="SimilarEvents">
            <h2>Похожие мероприятия</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    768: {slidesPerView: 2}, 1024: {slidesPerView: 3},
                }}
            >
                {events
                    .filter((e) => e.id !== currentEvent.id)
                    .slice(0, 9)
                    .map((event) => (<SwiperSlide key={event.id}>
                        <Card key={event.id} event={event} categories={categories}/>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    </div>);
};

export default EventInfo;
