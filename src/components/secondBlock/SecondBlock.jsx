import React from 'react'
import heart from '../../assets/image/heart.png'
import greenIcon from '../../assets/svg/green.svg'
import peopleIcon from '../../assets/svg/people.svg'
import './second.scss'
import { useTranslation } from "react-i18next";

function SecondBlock() {
  const { t } = useTranslation();
  
  return (
    <div className='all'>
      <div className='left'>
        <button className='btn1'>
          <img src={greenIcon} alt="" />
        </button>
        <h1>{t("CommunityTitle")}</h1>
        <p>{t("CommunityText")}</p>
        <button>
          <img src={peopleIcon} alt="" />
          {t("JoinClub")}
        </button>
      </div>
      <div className='right'>
        <img src={heart} alt="HeartVibe community" />
      </div>
    </div>
  )
}

export default SecondBlock;