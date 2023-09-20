import React from 'react';
import './ProductDetailTitle.css';

const ProductDetailTitle = ({ product }) => (
    <div className='product-detail-title-wrapper'>
        <div className='product-detail-title-year-wrapper'>
            <h3 className='product-detail-title'>{product.ListingTitle}</h3>
            <h3 className='product-detail-year'>{product.year}</h3>
        </div>
        <div className='product-detail-price-container'>
            <span className='product-detail-price'>
                ${product.price.toLocaleString('en-US')}
            </span>
            <div className='detail-divider'></div>
            <div className='btn-container'>
                <button className='detail-btn'>
                    <i className='fas fa-shopping-cart'></i> Add to cart
                </button>
                <button className='detail-btn'>
                    <i className='fas fa-heart'></i> Add to wishlist
                </button>
            </div>
        </div>
    </div>
);

export default ProductDetailTitle;
