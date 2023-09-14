import React, { useState } from 'react';
import useAuth from './useAuth';
import LoginBox from './LoginBox';
import SignupBox from './SignupBox';
import './Login.css';

const Index = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const { errors, validateForm } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm(signupData)) {
      console.log('Performing signup', signupData);
    }
  };

  return (
    <div className="login-container">
      <LoginBox
        loginData={loginData}
        setLoginData={setLoginData}
        setShowLoginPassword={setShowLoginPassword}
        showLoginPassword={showLoginPassword}
      />
      <SignupBox
        signupData={signupData}
        setSignupData={setSignupData}
        setShowSignupPassword={setShowSignupPassword}
        showSignupPassword={showSignupPassword}
        handleSignup={handleSignup}
      />
      {Object.keys(errors).map((key) => (
        <p key={key}>{errors[key]}</p>
      ))}
    </div>
  );
};

export default Index;
