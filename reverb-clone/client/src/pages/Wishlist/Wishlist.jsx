import React from 'react';
import { useWishlist } from './WishlistContext';
import { useCart } from '../Cart/CartContext'
import ProductCard from '../ProductListing/ProductCard';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Assume removeFromWishlist is defined in WishlistContext
  const { addToCart } = useCart();

  const handleRemoveFromWishlist = (sku) => {
    removeFromWishlist(sku);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.SKU);
  };

  return (
    <div> 
      <div className="product-header"></div>
      <div className="product-title">
        <h1>Wishlist</h1>
        <div className="divider"></div>
      </div>
      <div className='wishlist-container'>

      
      <div className='product-listing-container'> {/* Use the same class for styling */}
        {wishlist.map((product, index) => (
            <ProductCard 
            key={index} 
            product={product} 
            inWishlist={true} 
            isLink={false}
            onRemove={handleRemoveFromWishlist} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Wishlist;
