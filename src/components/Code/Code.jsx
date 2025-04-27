import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyCode } from '../../app/store/otpVerificationSlice/otpVerificationSlice';
import './code.scss';

function Code() {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(59);
  const dispatch = useDispatch();
  const otpStatus = useSelector((state) => state.otpVerification.otpStatus);
  const otpError = useSelector((state) => state.otpVerification.otpError);
  const otpMessage = useSelector((state) => state.otpVerification.otpMessage);
  const email = useSelector((state) => state.otp.email); // Получаем email из редукса

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeSubmit = () => {
    if (code.length !== 6) {
      alert("Пожалуйста, введите корректный код.");
      return;
    }
    dispatch(verifyCode({ email, code }));
  };

  return (
    <div className='code'>
      <h2>Введите код</h2>
      <p>Мы отправили вам 6-ти значный код на почту</p>
      <h4>{email}</h4>
      <div className='numbers'>
        <input 
          type="text" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          maxLength={6}
          placeholder="Введите код" 
        />
      </div>

      {otpStatus === 'loading' && <p>Пожалуйста, подождите...</p>}
      {otpMessage && <p>{otpMessage}</p>}
      {otpError && <p style={{ color: 'red' }}>{otpError}</p>}

      <button onClick={handleCodeSubmit} type="button">Подтвердить</button>

      <p>Отправить код заново через 
        <span className="createAccount">{`00:${timer < 10 ? '0' + timer : timer} сек`}</span>
      </p>
    </div>
  );
}

export default Code;