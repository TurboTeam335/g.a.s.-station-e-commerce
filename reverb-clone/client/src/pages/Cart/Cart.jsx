import React from 'react';
import { useCart } from './CartContext';
// ... other imports ...

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <div className='product-header'></div>
      <div className='product-title'>
        <h1>Shopping Cart</h1>
        <div className='divider'></div>
      </div>
      <div>
        {cart.map((product, index) => (
          <div key={index}>
            {/* Display product details here */}
            <p>{product.ListingTitle}</p>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
