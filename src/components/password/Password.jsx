import React, { useState } from "react";
import passwordIcon from "../../assets/svg/password.svg";
import { IoEye } from "react-icons/io5";
import helpImg from "../../assets/image/help.png";
import { LuEyeClosed } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../app/store/password/passwordSlice";
import "./password.scss";

function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector((state) => state.password);

  // Получаем токен из localStorage или другого хранилища (если это необходимо)
  const token = localStorage.getItem("confirmationToken");

  const handleSubmit = () => {
    if (password === confirmPassword) {
      const passwordData = { password }; // Если нужно, добавьте другие параметры
      dispatch(changePassword(passwordData, token)); // Передаем token для авторизации
    } else {
      alert("Пароли не совпадают");
    }
  };

  return (
    <div className="password">
      <div className="left">
        <h3>Придумайте пароль</h3>
        <p>
          Пароль должен содержать только латинские буквы и не менее 8-ми
          символов
        </p>
        <div className="inputWrapper">
          <span className="icon">
            <img src={passwordIcon} alt="Password Icon" />
          </span>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <LuEyeClosed />
        </div>
        <div className="inputWrapper">
          <span className="icon">
            <img src={passwordIcon} alt="Password Icon" />
          </span>
          <input
            type="password" // Изменил на password
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
          <IoEye />
        </div>
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Загрузка..." : "Подтвердить"}
        </button>
        {/* Обработка ошибки */}
        {error && <p className="error">{error?.detail || error}</p>}
        {success && <p className="success">Пароль изменён успешно!</p>}
      </div>
      <div className="right">
        <img src={helpImg} alt="Help" />
      </div>
    </div>
  );
}

export default Password;
