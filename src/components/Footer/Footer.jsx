import React, { useState, useEffect } from 'react';
import './footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sendFeedback, resetFeedback } from '../../app/store/feedbackSlice/feedbackSlice.js';
import { LiaTelegram } from "react-icons/lia";
import location from '../../assets/svg/location.svg';
import mess from '../../assets/svg/mess.svg';
import phone from '../../assets/svg/phone.svg';
import { FaWhatsapp, FaPhone, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("+996");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { loading, success, error } = useSelector((state) => state.feedback);

  const handlePhoneChange = (e) => {
    let input = e.target.value;
    if (!input.startsWith("+996")) input = "+996";
    input = "+996" + input.replace(/\D/g, "").slice(3);
    setPhoneNumber(input);
  };

  const handleSubmit = () => {
    if (name.trim().length < 2) {
      toast.error(t("enterName"));
      return;
    }
    dispatch(sendFeedback({ name, phone_number: phoneNumber }));
  };

  useEffect(() => {
    if (success) {
      toast.success(t("thanksFeedback"));
      setName("");
      setPhoneNumber("+996");
      dispatch(resetFeedback());
    }
    if (error) {
      toast.error(`${t("errorSending")}: ${error}`);
      dispatch(resetFeedback());
    }
  }, [success, error, dispatch, t]);

  return (
    <div className='footer'>
      <div className='text'>
        <h2>{t("ContactsFeedback")}</h2>
        <p>{t("ContactsText")}</p>
      </div>

      <div className="contact-list">
        <div className="contact-item">
          <img src={location} alt={t("address")} className="contact-icon" />
          <p>{t("address")}</p>
        </div>
        <div className="contact-item">
          <img src={mess} alt="Email" className="contact-icon" />
          <p>heartvibevolonteers@gmail.com</p>
        </div>
        <div className="contact-item">
          <img src={phone} alt={t("phone")} className="contact-icon" />
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
              <label htmlFor="phone">{t("PhoneNumber")}</label>
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
              <label htmlFor="name">{t("YourName")}</label>
              <input
                type="text"
                id="name"
                className="custom-input"
                placeholder={t("fullName")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? t("sending") : t("Submit")}
          </button>

          <p>{t("PrivacyPolicy")}</p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick />
    </div>
  );
}

export default Footer;
