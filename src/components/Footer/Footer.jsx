import React, { useState } from 'react';
import './footer.scss';
import { LiaTelegram } from "react-icons/lia";
import location from '../../assets/svg/location.svg';
import mess from '../../assets/svg/mess.svg';
import phone from '../../assets/svg/phone.svg';
import { FaWhatsapp, FaPhone, FaUser } from "react-icons/fa";

function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("+996");

  const handlePhoneChange = (e) => {
    let input = e.target.value;

   if (!input.startsWith("+996")) {
      input = "+996";
    }

    input = "+996" + input.replace(/\D/g, "").slice(3);

    setPhoneNumber(input);
  };

  return (
    <div className='footer'>
      <div className='text'>
        <h2>Контакты и обратная связь</h2>
        <p>Остались вопросы? Свяжись с нами!</p>
      </div>
      
      <ul className="contact-list">
        <li className="contact-item">
          <img src={location} alt="Адрес" className="contact-icon" />
          <span>Турусбекова 109/1</span>
        </li>
        <li className="contact-item">
          <img src={mess} alt="Email" className="contact-icon" />
          <span>heartvibevolonteers@gmail.com</span>
        </li>
        <li className="contact-item">
          <img src={phone} alt="Телефон" className="contact-icon" />
          <span>+996 501 30 10 05</span>
        </li>
        <li className="contact-item">
          <LiaTelegram className="contact-icon" />
          <span>+996 552 32 52 95</span>
        </li>
        <li className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <span>+996 555 05 53 00</span>
        </li>
      </ul>
      
      <div className="input-section">
        <div className="input-group">
          <div className="input-with-icon">
            <FaPhone className="input-icon" />
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
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              id="name" 
              className="custom-input" 
              placeholder="Как к вам обращаться?"
            />
          </div>
        </div> 
        
        <button className="submit-btn">Отправить</button>
      </div>
    </div>
  );
}

export default Footer;
