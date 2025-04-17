import React from 'react'
import heart from '../../assets/image/heart.png'
import greenIcon from '../../assets/svg/green.svg'
import peopleIcon from '../../assets/svg/people.svg'
import './second.scss'
function SecondBlock() {
  return (
    <div className='all'>
      <div className='left'>
        <button className='btn1'>
            <img src={greenIcon} alt="" />
        </button>
        <h1>HeartVibe – сообщество людей, меняющих мир</h1>
        <p>Мы объединяем активных, добрых и неравнодушных людей, которые хотят помогать другим. Наши волонтёры участвуют в благотворительных акциях, экологических инициативах и социальных проектах. Вместе мы делаем этот мир лучше!</p>
        <button>
            <img src={peopleIcon} alt="" />
            Присоедениться к клубу
        </button>
      </div>
      <div className='right'>
     <img src={heart} alt="" />
      </div>
    </div>
  )
}

export default SecondBlock
