import React, { createContext, useEffect, useState } from "react";

const cartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  

  const addToCart = (item) => {
    const alreadyExist = cart.find((i) => i.id === item.id);
    if (alreadyExist) {
      const updatedArray = cart.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
      setCart(updatedArray);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedArray = cart.filter((i) => i.id !== item.id);
    setCart(updatedArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((i) => (total = total + i.price * i.quantity));

    return total;
  };

  const decreaseQuantity = (item) => {
    const updatedArray = cart.map((i) => {
      if (i.id === item.id) {
        const newQuantity = i.quantity - 1;
        if (newQuantity >= 0) {
          return { ...i, quantity: newQuantity };
        }
      }
      return i;
    });
    setCart(updatedArray.filter((i) => i.quantity > 0)); // Remove items with quantity 0
  };

  const addToWishlist = (item) => {
    const updatedCart = cart.filter((i) => i.id !== item.id);
    setCart(updatedCart);

    setWishlist([...wishlist, item]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        decreaseQuantity,
        addToWishlist,
        wishlist
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { cartContext, ContextProvider };
