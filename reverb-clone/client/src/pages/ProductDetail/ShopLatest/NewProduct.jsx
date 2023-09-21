import React from 'react';
import shopNow from '../../../img/shopNow.png';
import './NewProduct.css';

const NewProduct = () => (
    <div className='new-container'>
        <div className='new-image-wrapper'>
            <img src={shopNow} className='new-image' />
        </div>
        <div className='detail-divider'></div>
        <div className='btn-container'>
            <button className='detail-btn'>Shop Now</button>
        </div>
    </div>
);

export default NewProduct;
