import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.Photo.url}
          alt={product.ListingTitle}
          className="product-image"
        />
      </div>

      <h3 className="product-card-title">{product.ListingTitle}</h3>
      
      <div className="product-price-container">
        <span className="product-price-label">Price</span>
        <span className="product-price">
          ${product.price.toLocaleString('en-US')}
        </span>
      </div>
    </div>
  );
};


export default ProductCard;
