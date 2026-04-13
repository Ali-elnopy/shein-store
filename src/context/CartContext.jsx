import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Structured Wool Overcoat",
      color: "Camel Melange",
      size: "Medium",
      price: 1240,
      quantity: 1,
      badge: "Tailored",
      img: null,
    },
    {
      id: 2,
      name: "Velocity Tech Runner",
      color: "Crimson Red",
      size: "10 US",
      price: 280,
      quantity: 2,
      badge: "Trending",
      img: null,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <CartContext.Provider value={{ cartItems, updateQuantity, removeItem, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};