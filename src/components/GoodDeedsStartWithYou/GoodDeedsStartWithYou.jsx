import React from 'react'
import "./GoodDeedsStartWithYou.scss"
import heroimg from "../../assets/GoodDeedsStartWithYou//image/HeroBlockImg.png"

function GoodDeedsStartWithYou() {
  return (
    <div className='container'>
      <div className='GoodDeedsStartWithYouContant'>
        <div>
          <div className='GoodDeedsStartWithYouTextContant'>
        <h1>Добрые дела начинаются с тебя!</h1>
        <p>Присоединяйся к HeartVibe — волонтёрскому клубу, где каждый может помочь, вдохновить и изменить мир к лучшему</p>
          </div>
        <div className='BtnContant'>
          <button className='BecomeAVolunteerBtn'>Стать волонтёром</button>
          <button className='ViewEventsBtn'>Смотреть мероприятия</button>
        </div>
        </div>
        <img  className="GoodDeedsStartWithYouheroimg" src={heroimg} alt="" />
      </div>
    </div>
  )
}

export default GoodDeedsStartWithYou