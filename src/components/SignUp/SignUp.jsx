import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '../../app/store/otp/otpSlice';  
import sendIcon from '../../assets/svg/send.svg';
import groupImg from '../../assets/image/group.png';
import './SignUp.scss';

function SignUp() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const otpStatus = useSelector((state) => state.otp.otpStatus);
  const otpMessage = useSelector((state) => state.otp.otpMessage);
  const otpError = useSelector((state) => state.otp.otpError);

  // Функция для проверки формата email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Если email некорректный
    if (!validateEmail(email)) {
      alert("Пожалуйста, введите корректный email");
      return;
    }

    dispatch(sendOtp(email)); // Отправка OTP
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
          <button 
            className="btn" 
            type="submit" 
            disabled={otpStatus === 'loading'} // Кнопка заблокирована только при загрузке
          >
            {otpStatus === 'loading' ? 'Загрузка...' : 'Отправить'}
          </button>
        </form>
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
