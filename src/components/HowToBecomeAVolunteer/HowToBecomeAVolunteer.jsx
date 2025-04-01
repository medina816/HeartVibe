import React from 'react'
import "./HowToBecomeAVolunteer.scss"
import line from "../../assets/HowToBecomeAVolunteer/svg/Progress Bar.svg"
import fill from "../../assets/GoodDeedsStartWithYou/svg/BecomeAVolunteer.svg"

function HowToBecomeAVolunteer() {
  return (
    <section className='HowToBecomeAVolunteerContainer'>
        <div>

        <div>
        <h1 className='HowToBecomeAVolunteerTitle'>Как стать волонтёром</h1>
        <p className='startParagraf'>Начни свой путь в волонтёрстве за 3 шага!</p>
        </div>
        <div className='process'>
            <div className='HowToBecomeAVolunteerCard'>
                <div className='NumberContainer'><h1>1</h1></div>
                <h4 className='heroh1'>Заполни анкету</h4>
                <p className='cardParagraf'>выбери направление, в котором хочешь помогать</p>
            </div>
            <div className='line1'></div>
            <div className='HowToBecomeAVolunteerCard'>
                <div className='NumberContainer'><h1>2</h1></div>
                <h4 className='heroh1'>Пройди инструктаж</h4>
                <p className='cardParagraf'>получи полезные советы и рекомендации</p>
            </div>
            <img src={line} alt="" />
            <div className='HowToBecomeAVolunteerCard'>
                <div className='NumberContainer'><h1>3</h1></div>
                <h4 className='heroh1'>Приступай к добрым делам!</h4>
                <p className='cardParagraf'>становись частью активного волонтёрского сообщества</p>
            </div>
        </div>
        <div className='FillOutTheRormContainer'>
        <button className='FillOutTheRorm'> <img src={fill}/>Заполнить анкету</button>
        </div>
        </div>
    </section>
  )
}

export default HowToBecomeAVolunteer