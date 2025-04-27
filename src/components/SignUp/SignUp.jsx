import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '../../app/store/otp/otpSlice';  
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import sendIcon from '../../assets/svg/send.svg';
import groupImg from '../../assets/image/group.png';
import './SignUp.scss';

function SignUp() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Инициализируем useNavigate
  const otpStatus = useSelector((state) => state.otp.otpStatus);
  const otpMessage = useSelector((state) => state.otp.otpMessage);
  const otpError = useSelector((state) => state.otp.otpError);
  const lastRequestTime = useSelector((state) => state.otp.lastRequestTime);

  // Проверка на блокировку кнопки на 30 секунд
  const isButtonDisabled = lastRequestTime && (Date.now() - lastRequestTime < 30000);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Если кнопка заблокирована
    if (isButtonDisabled) {
      alert('Пожалуйста, подождите 30 секунд перед повторной отправкой запроса.');
      return;
    }

    // Отправляем OTP
    dispatch(sendOtp(email)).then((action) => {
      if (action.type === 'otp/sendOtp/fulfilled') {
        // Переходим на страницу подтверждения, если запрос успешен
        navigate('/verify'); 
      }
    });
  };

  return (
    <div className='overAll'>
      <div className='left'>
        <h2>Зарегистрируйтесь</h2>
        <p>Мы отправим вам код подтверждения на почту для верификации</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <span className="icon">
              <img src={sendIcon} alt="Send Icon" />
            </span>
            <input 
              type="text" 
              placeholder="Эл.почта" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="off" 
            />
          </div>
          <button className="btn" disabled={isButtonDisabled}>Отправить</button>
        </form>
        {otpStatus === 'loading' && <p>Загрузка...</p>}
        {otpMessage && <p>{otpMessage}</p>}
        {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
        <p>Есть аккаунт? 
          <span className="createAccount">Войдите</span>
        </p>
      </div>
      <div className='right'>
        <img src={groupImg} alt="Become" />
      </div>
    </div>
  );
}

export default SignUp;
