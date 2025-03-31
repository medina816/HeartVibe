import React, {useState} from 'react';
import './footer.scss';
import {LiaTelegram} from "react-icons/lia";
import location from '../../assets/svg/location.svg';
import mess from '../../assets/svg/mess.svg';
import phone from '../../assets/svg/phone.svg';
import {FaWhatsapp, FaPhone, FaUser} from "react-icons/fa";

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

            <div className="contact-list">
                <div className="contact-item">
                    <img src={location} alt="Адрес" className="contact-icon"/>
                    <p>Турусбекова 109/1</p>
                </div>
                <div className="contact-item">
                    <img src={mess} alt="Email" className="contact-icon"/>
                    <p>heartvibevolonteers@gmail.com</p>
                </div>
                <div className="contact-item">
                    <img src={phone} alt="Телефон" className="contact-icon"/>
                    <p>+996 501 30 10 05</p>
                </div>
                <div className="contact-item">
                    <LiaTelegram className="contact-icon"/>
                    <p>+996 552 32 52 95</p>
                </div>
                <div className="contact-item">
                    <FaWhatsapp className="contact-icon"/>
                    <p>+996 555 05 53 00</p>
                </div>
            </div>

            <div className="input-section">
                <div className="inputs">
                    <div className="input-group">
                        <FaPhone className="input-icon"/>
                        <div className="input-with-icon">
                            <label>Номер телефона</label>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="custom-input"
                                    value={phoneNumber}
                                    onChange={handlePhoneChange}
                                    placeholder="12345679"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <FaUser className="input-icon"/>
                        <div className="input-with-icon">
                            <label>Как к вам обращаться?</label>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    className="custom-input"
                                    placeholder="ФИО"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="submit-btn">Отправить</button>
                    <p>Нажимая “Отправить”, вы соглашаетесь с обработкой ваших личных данных</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
