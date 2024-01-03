import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import './Cart.css';
import noImg from '../../data/img/noGuitar.jpeg';

const Cart = () => {
  const {
    cart,
    selectedItems,
    setSelectedItems,
    toggleItemSelection,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    const allSKUs = new Set(cart.map(product => product.SKU));
    setSelectedItems(allSKUs);
  }, [cart, setSelectedItems]);

  const subtotal = [...selectedItems].reduce(
    (total, sku) => total + cart.find(product => product.SKU === sku).price,
    0
  );

  const handleCheckboxChange = sku => {
    toggleItemSelection(sku);
  };

  const handleRemoveFromCart = sku => {
    removeFromCart(sku);
  };

  const handleCheckout = () => {};
  return (
    <>
      <div className='product-header'></div>
      <div className='product-title'>
        <h1>Shopping Cart</h1>
        <div className='divider'></div>
      </div>
      
      <div className='cart-container'>
        <div className='cart-column-labels'>
          <div className='cart-column select-box'></div>
          <div className='cart-column'>Item</div>
          <div className='cart-column price-column'>Price</div>
        </div>

        {cart.map((product, index) => (
          <div key={index} className='cart-item'>
            <div className='select-box'>
              <input
                type='checkbox'
                checked={selectedItems.has(product.SKU)}
                onChange={() => handleCheckboxChange(product.SKU)}
              />
            </div>
            <img
              src={product.Photo.url || noImg}
              alt={product.ListingTitle}
              className='product-image-cart'
            />
            <div className='item-details'>
              <p className='title'>
                {product.ListingTitle} {product.year && `- ${product.year}`}
              </p>
              <button
                onClick={() => handleRemoveFromCart(product.SKU)}
                className='delete-item-button'
              >
                Delete
              </button>
            </div>
            <p className='price'>${product.price.toLocaleString('en-US')}</p>
          </div>
        ))}

        <div className='cart-subtotal'>
          <span>Subtotal ({selectedItems.size} items): </span>
          <span>${subtotal.toLocaleString('en-US')}</span>
        </div>

        <div className='checkout-button-container'>
          <button onClick={handleCheckout} className='checkout-button'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
