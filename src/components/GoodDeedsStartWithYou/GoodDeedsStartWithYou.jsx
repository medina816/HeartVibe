  import React from 'react';
  import "./GoodDeedsStartWithYou.scss";
  import heroimg from "../../assets/GoodDeedsStartWithYou/image/HeroBlockImg.png";
  import BecomeAVolunteer from "../../assets/GoodDeedsStartWithYou/svg/BecomeAVolunteer.svg"
  import calendar from "../../assets/GoodDeedsStartWithYou/svg/calendar.svg"

  function GoodDeedsStartWithYou() {
    return (
      <section className='GoodDeedsStartWithYouContainer'>
        <div className='circleContainer'>
        <div className='circle'></div>
        <div className='circle1'></div>
        </div>
        <div className='GoodDeedsStartWithYouContant'>
          <div className='GoodDeedsStartWithYouTextContant'>
            <h1>Добрые дела начинаются с тебя!</h1>
            <p>Присоединяйся к HeartVibe — волонтёрскому клубу, где каждый может помочь, вдохновить и изменить мир к лучшему</p>
            <div className='BtnContant'>
              <button className='BecomeAVolunteerBtn'> <img src={BecomeAVolunteer} alt="" />Стать волонтёром</button>
              <button className='ViewEventsBtn'> <img src={calendar} alt="" />Смотреть мероприятия</button>
            </div>
          </div>
          <div className='GoodDeedsStartWithYouheroimg'>
            <img src={heroimg} alt='Добрые дела начинаются с тебя' />
          </div>
        </div>
      </section>
    );
  }

  export default GoodDeedsStartWithYou;
