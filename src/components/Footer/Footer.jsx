import React, { useState, useEffect } from 'react';
import './footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sendFeedback, resetFeedback } from '../../app/store/feedbackSlice/feedbackSlice.js';
import { LiaTelegram } from "react-icons/lia";
import location from '../../assets/svg/location.svg';
import mess from '../../assets/svg/mess.svg';
import phone from '../../assets/svg/phone.svg';
import { FaWhatsapp, FaPhone, FaUser } from "react-icons/fa";

function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("+996");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.feedback);

  const handlePhoneChange = (e) => {
    let input = e.target.value;
    if (!input.startsWith("+996")) {
      input = "+996";
    }
    input = "+996" + input.replace(/\D/g, "").slice(3);
    setPhoneNumber(input);
  };

  const handleSubmit = () => {
    if (name.trim().length < 2) {
      alert("Пожалуйста, введите имя.");
      return;
    }

    dispatch(sendFeedback({ name, phone_number: phoneNumber }));
  };

  useEffect(() => {
    if (success) {
      alert("Спасибо! Мы с вами свяжемся.");
      setName("");
      setPhoneNumber("+996");
      dispatch(resetFeedback());
    }

    if (error) {
      alert("Ошибка при отправке: " + error);
      dispatch(resetFeedback());
    }
  }, [success, error, dispatch]);

  return (
    <div className='footer'>
      <div className='text'>
        <h2>Контакты и обратная связь</h2>
        <p>Остались вопросы? Свяжись с нами!</p>
      </div>

      <div className="contact-list">
        <div className="contact-item">
          <img src={location} alt="Адрес" className="contact-icon" />
          <p>Турусбекова 109/1</p>
        </div>
        <div className="contact-item">
          <img src={mess} alt="Email" className="contact-icon" />
          <p>heartvibevolonteers@gmail.com</p>
        </div>
        <div className="contact-item">
          <img src={phone} alt="Телефон" className="contact-icon" />
          <p>+996 501 30 10 05</p>
        </div>
        <div className="contact-item">
          <LiaTelegram className="contact-icon" />
          <p>+996 552 32 52 95</p>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <p>+996 555 05 53 00</p>
        </div>
      </div>

      <div className="input-section">
        <div className="inputs">
          <div className="input-group">
            <FaPhone className="input-icon" />
            <div className="input-with-icon">
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="tel"
                id="phone"
                className="custom-input"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <div className="input-group">
            <FaUser className="input-icon" />
            <div className="input-with-icon">
              <label htmlFor="name">Как к вам обращаться?</label>
              <input
                type="text"
                id="name"
                className="custom-input"
                placeholder="ФИО"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Отправка..." : "Отправить"}
          </button>

          <p>Нажимая “Отправить”, вы соглашаетесь с обработкой ваших личных данных</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
