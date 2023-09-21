import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import noImg from '../../data/img/noGuitar.jpeg';

const ProductCard = ({ product, className = '' }) => {
  return (
    <Link 
      to={`/products/${product.SKU}`} 
      className={`product-card ${className}`}
    >
      <div className='product-image-wrapper'>
        <img
          src={product.Photo.url || noImg}
          alt={product.ListingTitle}
          className='product-image'
        />
      </div>

      <h3 className='product-card-title'>
        {product.ListingTitle} {product.year && `- ${product.year}`}
      </h3>

      <div className='product-price-container'>
        <span className='product-price-label'>Price</span>
        <span className='product-price'>
          ${product.price.toLocaleString('en-US')}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
