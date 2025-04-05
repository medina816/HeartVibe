import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../app/store/team/teamSlice";

import volonteers from "../../assets/image/volonteers.png";
import lifes from "../../assets/image/lifes.png";
import card1 from "../../assets/image/card1.png";
import card2 from "../../assets/image/card2.png";
import "./club.scss";

function Club() {
  const dispatch = useDispatch();
  const { teams, status, error } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div className="club-container">
      <div className="about-club">
        <h2>О клубе</h2>
        <h3>Наша миссия</h3>
        <p>
          Наш проект создан, чтобы объединить людей, готовых помогать другим...
        </p>
      </div>

      <div className="background">
        <img src={lifes} alt="lifes" className="lifes" />
        <img src={volonteers} alt="volunteers" className="volonteers" />
        <button className="btn1">
          Развивать культуру добрых дел в обществе
        </button>
        <button className="btn2">
          Создавать новые проекты, которые действительно меняют мир.
        </button>
        <button className="btn3">Сделать волонтёрство доступным каждому</button>
        <button className="btn4">
          Поддерживать волонтёров и организации, предоставляя им платформу
          для взаимодействия.
        </button>
      </div>

      <div className="card1">
        <img src={card1} alt="card1" />
        <div className="txt">
          <div>
            <h2>История создания</h2>
            <p>Идея создания нашего проекта родилась из простого желания помочь...</p>
          </div>
        </div>
      </div>

      <div className="card2">
        <img src={card2} alt="card2" />
        <div className="txt2">
          <div>
            <h2>История создания</h2>
            <p>
              Так появилась наша платформа — место, где каждый может найти
              проект по душе...
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-part">
        <h2>Наша команда</h2>
        <div className="out">
          {status === "loading" && <p>Загрузка...</p>}
          {status === "failed" && <p>Ошибка: {error}</p>}
          {status === "succeeded" && teams.length > 0 && teams.map((member) => (
            <div className="members" key={member.id}>
              <img
                src={member.photo || "https://via.placeholder.com/150"}
                alt={member.full_name}
              />
              <h3>{member.full_name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Club;
