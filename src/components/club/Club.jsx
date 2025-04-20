import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTeams} from "../../app/store/team/teamSlice";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
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
                <h2>{t("aboutClub")}</h2>
                <div className="text1">
                    <h3>{t("ourMission")}</h3>
                    <p>{t("missionText")}</p>
                </div>
            </div>

            <div className="background">
                <img src={lifes} alt={t("livesAlt")} className="lifes"/>
                <img src={volonteers} alt={t("volunteersAlt")} className="volonteers"/>
                <button className="btn1">
                    {t("goal1")}
                </button>
                <button className="btn2">
                    {t("goal2")}
                </button>
                <button className="btn3">{t("goal3")}</button>
                <button className="btn4">
                    {t("goal4")}
                </button>
            </div>

            <div className="card1">
                <img src={card1} alt={t("historyCardAlt")}/>
                <div className="txt">
                    <div>
                        <h2>{t("creationHistory")}</h2>
                        <p>{t("historyText1")}</p>
                    </div>
                </div>
            </div>

            <div className="card2">
                <img src={card2} alt={t("platformCardAlt")}/>
                <div className="txt2">
                    <div>
                        <h2>{t("platformDevelopment")}</h2>
                        <p>{t("historyText2")}</p>
                    </div>
                </div>
            </div>

            <div className="bottom-part">
                <h2>{t("ourTeam")}</h2>
                <div className="out">
                    {status === "loading" && <p>{t("loading")}</p>}
                    {status === "failed" && <p>{t("error")}: {error}</p>}
                    {status === "succeeded" && teams.length > 0 && (
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
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
                                        onClick={() => handleCardClick(member)}
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