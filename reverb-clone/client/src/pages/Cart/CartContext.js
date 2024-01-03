import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set()); // Tracks selected items

  // Define addToCart function
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if the product already exists in the cart
      const isProductInCart = prevCart.some(item => item.SKU === product.SKU);
      if (!isProductInCart) {
        return [...prevCart, product];
      }
      return prevCart;
    });
  };

  // Define removeFromCart function
  const removeFromCart = (sku) => {
    setCart(prevCart => prevCart.filter(product => product.SKU !== sku));
    setSelectedItems(prevSelectedItems => {
      const newSelection = new Set(prevSelectedItems);
      newSelection.delete(sku);
      return newSelection;
    });
  };

  const toggleItemSelection = (sku) => {
    setSelectedItems(prevSelectedItems => {
      const newSelection = new Set(prevSelectedItems);
      if (newSelection.has(sku)) {
        newSelection.delete(sku);
      } else {
        newSelection.add(sku);
      }
      return newSelection;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        selectedItems,
        setSelectedItems,
        toggleItemSelection,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
