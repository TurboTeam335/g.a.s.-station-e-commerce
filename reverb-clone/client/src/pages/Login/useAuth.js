import { useState } from 'react';

const useAuth = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData, formType) => {
    const newErrors = {};

    // Common email validation for both forms
    if (!/.+@.+\..+/.test(formData.email)) {
      newErrors.email = 'Must use a valid email address';
    }

    if (formType === 'signup') {
      // Signup-specific validations
      if (formData.password.length < 8) {
        newErrors.password = 'Password should be at least 8 characters long';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords must match';
      }
    }     
    
    if (formType === 'login') {
      if (!/.+@.+\..+/.test(formData.email)) {
        newErrors.email = 'Must use a valid email address';
      }
      if (formData.password.length < 8) {
        newErrors.password = 'Password should be at least 8 characters long';
      }
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validateForm,
  };
};

export default useAuth;
