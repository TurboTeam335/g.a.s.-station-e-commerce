import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    // Prevent adding duplicates
    if (!wishlist.some(p => p.SKU === product.SKU)) {
      setWishlist((currentWishlist) => [...currentWishlist, product]);
    }
  };

  const removeFromWishlist = (sku) => {
    setWishlist((currentWishlist) => currentWishlist.filter(product => product.SKU !== sku));
  };
  
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
