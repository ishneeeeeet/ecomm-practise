import React, { createContext, useState } from "react";

const cartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
    console.log(cart);
  };

  const removeFromCart = (item) => {
    const updatedArray = cart.map((i) => i.id !== item.id);
    setCart(updatedArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export { cartContext, ContextProvider };
