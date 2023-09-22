// Navigation/Navigation.jsx
import React from 'react';
import './Navigation.css';

const Navigation = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="navigation-buttons">
      {currentStep > 1 && <button onClick={() => setCurrentStep(prev => prev - 1)}>Previous</button>}
      {currentStep < 3 && <button onClick={() => setCurrentStep(prev => prev + 1)}>Next</button>}
    </div>
  )
}

export default Navigation;
