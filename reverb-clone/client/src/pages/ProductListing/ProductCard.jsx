import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ProductCard.css';
import noImg from '../../data/img/noGuitar.jpeg';

const ProductCard = ({ product, className = '', inWishlist = false, onRemove, onAddToCart }) => {
  const navigate = useNavigate();

  const cardContent = (
    <>
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
    </>
  );

  return (
    <div className={`product-card ${className}`} onClick={() => navigate(`/products/${product.SKU}`)}>
      {cardContent}
      {inWishlist && (
        <div className='wishlist-buttons'>
          <button onClick={(e) => { e.stopPropagation(); onRemove(product.SKU); }} className='remove-btn'>Remove</button>
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }} className='add-to-cart-btn'>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
