import React, { useState } from 'react';
import './ProductDescription.css';

const ProductDescription = ({ product }) => {
  const [isSpecVisible, setSpecVisible] = useState(false);
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  return (
    <div className='description-wrapper'>
      <div className='spec-wrapper'>
        <p className='section-title'>
          Spec
          <button onClick={() => setSpecVisible(!isSpecVisible)}>
            {isSpecVisible ? '-' : '+'}
          </button>
        </p>
        {isSpecVisible && (
          <div className='spec-container'>
            <p>
              <strong>Instrument:</strong> {product.type}
            </p>
            <p>
              <strong>Brand:</strong> {product.Brand}
            </p>
            <p>
              <strong>Model:</strong> {product.Model}
            </p>
            {product.finish ? (
              <p>
                <strong>Finish:</strong> {product.finish}
              </p>
            ) : null}
            {product.subcategory ? (
              <p>
                <strong>Body:</strong> {product.subcategory}
              </p>
            ) : null}
            {product.year ? (
              <p>
                <strong>Made In Year:</strong> {product.year}
              </p>
            ) : null}
            {product.handedness ? (
              <p>
                <strong>Handedness:</strong> {product.handedness}
              </p>
            ) : null}
            {product.electronics ? (
              <p>
                <strong>Electronics:</strong> {product.electronics}
              </p>
            ) : null}
            {product.weight ? (
              <p>
                <strong>Weight:</strong> {product.weight}lbs
              </p>
            ) : null}
            {product.nutWidth ? (
              <p>
                <strong>Nut Width:</strong> {product.nutWidth}"
              </p>
            ) : null}
            <p>
              <strong>Condition:</strong> {product.Condition}
            </p>
            {product.SKU ? (
              <p>
                <strong>SKU:</strong> {product.SKU}
              </p>
            ) : null}
          </div>
        )}
      </div>
      <div className='description-info-wrapper'>
        <p className='section-title'>
          Description
          <button onClick={() => setDescriptionVisible(!isDescriptionVisible)}>
            {isDescriptionVisible ? '-' : '+'}
          </button>
        </p>
        {isDescriptionVisible && (
          <div className='description-container'>
            <p> {product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDescription;
