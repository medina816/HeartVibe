import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import sendIcon from '../../assets/svg/send.svg';
import passwordIcon from '../../assets/svg/password.svg';
import becomeImg from '../../assets/image/become.png';
import { Link } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <div className='overAll'>
      <div className='left'>
        <h2>Войдите</h2>
        <form autoComplete="off">
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

          <div className="inputWrapper2">
            <span className="icon2">
              <img src={passwordIcon} alt="Password Icon" />
            </span>
            <input 
              type={passwordVisible ? "text" : "password"} 
              placeholder="Пароль" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete="new-password"
            />
            <span 
              className="eye-icon"
              onClick={togglePasswordVisibility} 
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />} 
            </span>
          </div>

          <p className="forgotPassword">Забыли пароль?</p>

          <button className="btn">Войти</button>

          <p>Нет аккаунта? <Link to="/signUp">
          <span className="createAccount">Создайте его</span>
          </Link></p>
        </form>
      </div>

      <div className='right'>
        <img src={becomeImg} alt="Become Volunteer" />
      </div>
    </div>
  );
}

export default SignIn;
