import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyCode } from '../../app/store/otpVerificationSlice/otpVerificationSlice';
import { useNavigate } from 'react-router-dom';
import famImg from '../../assets/image/fam.png';
import './code.scss';

function Code() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputsRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { otpStatus, otpError, otpMessage } = useSelector((state) => state.otpVerification);
  const email = useSelector((state) => state.otp.email);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (otpStatus === 'succeeded') {
      navigate('/password'); 
    }
  }, [otpStatus, navigate]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleCodeSubmit = () => {
    const finalCode = code.join('');
    if (finalCode.length !== 6) {
      alert('Пожалуйста, введите корректный код.');
      return;
    }
    dispatch(verifyCode({ email, code: finalCode }));
  };

  return (
    <div className="code-page">
      <div className="code-form">
        <h2>Введите код</h2>
        <p>Мы отправили вам 6-значный код на почту:</p>
        <h4>{email}</h4>

        <div className="numbers">
          {code.map((num, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              value={num}
              onChange={(e) => handleChange(idx, e.target.value.slice(-1))}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              maxLength="1"
            />
          ))}
        </div>

        {otpStatus === 'loading' && <p>Пожалуйста, подождите...</p>}
        {otpMessage && <p style={{ color: 'green' }}>{otpMessage}</p>}
        {otpError && <p style={{ color: 'red' }}>{otpError}</p>}

        <button onClick={handleCodeSubmit} type="button">
          Подтвердить
        </button>

        <p className="resend-timer">
          Отправить код заново через
          <span className="createAccount">{` 00:${timer < 10 ? '0' + timer : timer} сек`}</span>
        </p>
      </div>

      <div className="code-image">
        <img src={famImg} alt="Family" />
      </div>
    </div>
  );
}

export default Code;
