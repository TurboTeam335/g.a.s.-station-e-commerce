import React from 'react';
import './ProductDetailImage.css';

const ProductDetailImage = ({ product }) => (
    <div className='product-detail-image-wrapper'>
        <img
            src={product.Photo.url}
            alt={product.ListingTitle}
            className='product-detail-image'
        />
    </div>
);

export default ProductDetailImage;
