import React from 'react';
import "./GoodDeedsStartWithYou.scss";
import heroimg from "../../assets/GoodDeedsStartWithYou/image/HeroBlockImg.png";
import BecomeAVolunteer from "../../assets/GoodDeedsStartWithYou/svg/BecomeAVolunteer.svg"
import calendar from "../../assets/GoodDeedsStartWithYou/svg/calendar.svg"
import { useTranslation } from "react-i18next";

function GoodDeedsStartWithYou() {
  const { t } = useTranslation();
  
  return (
    <section className='GoodDeedsStartWithYouContainer'>
      <div className='circleContainer'>
        <div className='circle'></div>
        <div className='circle1'></div>
      </div>
      <div className='GoodDeedsStartWithYouContant'>
        <div className='GoodDeedsStartWithYouTextContant'>
          <h1>{t("GoodDeedsStartWithYou")}</h1>
          <p>{t("JoinHeartVibe")}</p>
          <div className='BtnContant'>
            <button className='BecomeAVolunteerBtn'> 
              <img src={BecomeAVolunteer} alt="" />
              {t("BecomeVolunteer")}
            </button>
            <button className='ViewEventsBtn'> 
              <img src={calendar} alt="" />
              {t("ViewEvents")}
            </button>
          </div>
        </div>
        <div className='GoodDeedsStartWithYouheroimg'>
          <img src={heroimg} alt={t("GoodDeedsStartWithYou")} />
        </div>
      </div>
    </section>
  );
}

export default GoodDeedsStartWithYou;