// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const cartCount = cartItems.length;

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // 🔁 Update quantity (+ / -)
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if quantity < 1
    );
  };

  // ❌ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧮 Get total items count
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // 💰 Get total price
  const getTotalPrice = () =>
    cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



