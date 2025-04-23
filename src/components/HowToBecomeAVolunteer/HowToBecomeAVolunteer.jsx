import React from 'react'
import "./HowToBecomeAVolunteer.scss"
import fill from "../../assets/GoodDeedsStartWithYou/svg/BecomeAVolunteer.svg"
import { useTranslation } from "react-i18next";

function HowToBecomeAVolunteer() {
  const { t } = useTranslation();
  
  return (
    <section className='HowToBecomeAVolunteerContainer'>
      <div>
        <div>
          <h1 className='HowToBecomeAVolunteerTitle'>{t("HowToBecomeVolunteer")}</h1>
          <p className='startParagraf'>{t("VolunteerSteps")}</p>
        </div>
        <div className='process'>
          <div className='HowToBecomeAVolunteerCard'>
            <div className='NumberContainer'><h1>1</h1></div>
            <h4 className='heroh1'>{t("Step1Title")}</h4>
            <p className='cardParagraf'>{t("Step1Text")}</p>
          </div>
          <div className='line1'></div>
          <div className='HowToBecomeAVolunteerCard'>
            <div className='NumberContainer'><h1>2</h1></div>
            <h4 className='heroh1'>{t("Step2Title")}</h4>
            <p className='cardParagraf'>{t("Step2Text")}</p>
          </div>
          <div className='line1'></div>
          <div className='HowToBecomeAVolunteerCard'>
            <div className='NumberContainer'><h1>3</h1></div>
            <h4 className='heroh1'>{t("Step3Title")}</h4>
            <p className='cardParagraf'>{t("Step3Text")}</p>
          </div>
        </div>
        <div className='FillOutTheRormContainer'>
          <button className='FillOutTheRorm'> 
            <img src={fill} alt=""/>
            {t("FillForm")}
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowToBecomeAVolunteer;