import React from 'react';
import useAuth from './useAuth';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const SignupBox = ({
  signupData,
  setSignupData,
  setShowSignupPassword,
  showSignupPassword,
  handleSignup,
}) => {
  const { errors, validateForm } = useAuth();

  const handleSignupClick = () => {
    if (validateForm(signupData, 'signup')) {
      handleSignup(); // Your existing handleSignup function
    }
  };

  return (
    <div className='signup-box'>
      <h2>Create An Account</h2>
      <input
        className='register-box__input--text'
        type='text'
        placeholder='Username*'
        value={signupData.username}
        onChange={e =>
          setSignupData({ ...signupData, username: e.target.value })
        }
      />
      {errors.username && <div className='error'>{errors.username}</div>}
      <input
        className='register-box__input--email'
        type='text'
        placeholder='Email*'
        value={signupData.email}
        onChange={e => setSignupData({ ...signupData, email: e.target.value })}
      />
      {errors.email && <div className='error'>{errors.email}</div>}
      <div className='password-wrapper'>
        <input
          className='register-box__input--password'
          type={showSignupPassword ? 'text' : 'password'}
          placeholder='Password*'
          value={signupData.password}
          onChange={e =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
        {errors.password && <div className='error'>{errors.password}</div>}
        <span
          className='password-icon'
          onClick={() => setShowSignupPassword(!showSignupPassword)}
        >
          {showSignupPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
      </div>
      <div className='password-wrapper'>
        <input
          className='register-box__input--password'
          type={showSignupPassword ? 'text' : 'password'}
          placeholder='Confirm Password*'
          value={signupData.confirmPassword}
          onChange={e =>
            setSignupData({ ...signupData, confirmPassword: e.target.value })
          }
        />
        {errors.confirmPassword && (
          <div className='error'>{errors.confirmPassword}</div>
        )}
        <span
          className='password-icon'
          onClick={() => setShowSignupPassword(!showSignupPassword)}
        >
          {showSignupPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
      </div>
      <button className='signup-btn' onClick={handleSignupClick}>
        Register
      </button>
    </div>
  );
};

export default SignupBox;
