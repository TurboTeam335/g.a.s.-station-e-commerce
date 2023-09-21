import React from 'react';
import './ProductDetailImage.css';
import noImg from '../../../data/img/noGuitar.jpeg'

const ProductDetailImage = ({ product }) => (
    <div className='product-detail-image-wrapper'>
        <img
            src={product.Photo.url || noImg}
            alt={product.ListingTitle}
            className='product-detail-image'
        />
    </div>
);

export default ProductDetailImage;
