// Sell.jsx
import React, { useState } from "react";
import './Sell.css'
import ProductInfo from "./components/ProductInfo/ProductInfo";
import PhotoDescriptions from './components/PhotoDescription/PhotoDescription';
import Review from './components/Review/Review';
import Navigation from './components/Navigation/Navigation';

const Sell = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [productDetails, setProductDetails] = useState({});

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ProductInfo data={productDetails} setData={setProductDetails} />;
      case 2:
        return <PhotoDescriptions data={productDetails} setData={setProductDetails} />;
      case 3:
        return <Review data={productDetails} />;
      default:
        return <div>Something went wrong!</div>;
    }
  };

  return (
    <div> 
      <div className="product-header"></div>
      <div className="product-title">
        <h1>Sell</h1>
        <div className="divider"></div>
      </div>

      <div className="sell-content">
        {renderStepContent()}
        <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </div>
  )
}

export default Sell;
