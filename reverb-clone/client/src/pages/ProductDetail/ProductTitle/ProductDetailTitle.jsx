import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ProductDetailTitle.css';

const ProductDetailTitle = ({ product }) => {
    return (
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
                    <Link to="/cart">
                        <button className='detail-btn'>
                            <i className='fas fa-shopping-cart'></i> Add to cart
                        </button>
                    </Link>
                    <Link to="/wishlist">
                        <button className='detail-btn'>
                            <i className='fas fa-heart'></i> Add to wishlist
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailTitle;
