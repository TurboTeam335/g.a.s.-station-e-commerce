import React from 'react';
import useAuth from './useAuth';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const LoginBox = ({
  loginData,
  setLoginData,
  setShowLoginPassword,
  showLoginPassword,
}) => {
  const { errors, validateForm } = useAuth();

  const handleLoginClick = () => {
    if (validateForm(loginData, 'login')) {
      // Proceed with the login process
    }
  };

  return (
    <div className='login-box'>
      <h2>Member Login</h2>
      <input
      className="register-box__input--email"
        type='text'
        placeholder='Email*'
        value={loginData.email}
        onChange={e => setLoginData({ ...loginData, email: e.target.value })}
      />
      {errors.email && <div className='error'>{errors.email}</div>}
      <div className='password-wrapper'>
        <input
          className="register-box__input--password"
          type={showLoginPassword ? 'text' : 'password'}
          placeholder='Password*'
          value={loginData.password}
          onChange={e =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        {errors.password && <div className='error'>{errors.password}</div>}
        <span
          className='password-icon'
          onClick={() => setShowLoginPassword(!showLoginPassword)}
        >
          {showLoginPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
      </div>
      <button className="login-btn" onClick={handleLoginClick}>LogIn</button>

    </div>
  );
};

export default LoginBox;
