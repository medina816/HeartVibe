import React from 'react'
import volonteers from '../../assets/image/volonteers.png'
import lifes from '../../assets/image/lifes.png'
import card1 from '../../assets/image/card1.png';
import card2 from '../../assets/image/card2.png';
import man from '../../assets/image/man.png';
import './club.scss';
function Club() {
  return (
    <div className='club-container'>
        <div className='about-club'>
            <h2>О клубе</h2>
            <h3>Наша миссия</h3>
            <p>Наш проект создан, чтобы объединить людей, готовых помогать другим, и тех, кто нуждается в поддержке. Мы верим, что каждый может внести вклад в общество — будь то забота о детях, помощь пожилым людям, защита окружающей среды или поддержка животных.</p>
        </div>
        <div className='background'>
            <img src={lifes} alt='lifes' className='lifes' />
            <img src={volonteers} alt='volunteers'  className='volonteers'/>
        <button className='btn1'>Развивать культуру добрых дел в обществе</button>
        <button className='btn2'>Создавать новые проекты, которые действительно меняют мир.</button>
        <button className='btn3'>Сделать волонтёрство доступным каждому</button>
        <button className='btn4'>Поддерживать волонтёров и организации, предоставляя им платформу для взаимодействия.</button>
        </div>
           <div className="card1">
            <img src={card1}/>
            <div className='txt'>
                <h2>История создания</h2>
                <p>Идея создания нашего проекта родилась из простого желания помочь. Мы начали с небольших инициатив: сбор одежды для нуждающихся, экологические акции, бесплатные образовательные курсы. Со временем количество желающих участвовать росло, и стало ясно — нужен удобный сервис, объединяющий волонтёров и тех, кому нужна помощь.</p>
            </div>
           </div>
           <div className='card2'>
            <img src={card2}/>
           <div className='txt2'>
                <h2>История создания</h2>
                <p>Так появилась наша платформа — место, где каждый может найти проект по душе, получить поддержку и стать частью чего-то большего. Сегодня мы продолжаем развиваться, расширяем список программ и помогаем всё большему количеству людей.</p>
            </div>
           </div>

           <div className='bottom-part'>
            <h2>Наша команда</h2>
            <div className='out'>
            <div className='members'>
            <img src={man}/>
            <h3>Stephanie Sharkey</h3>
            <p>Основатель</p>
            </div>
            </div>
           </div>
    </div>
  )
}

export default Club
