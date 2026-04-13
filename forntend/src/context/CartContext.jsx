import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // const addToCart = (painting) => {
  //   const cartItem = { ...painting, cartId: uuidv4() };
  //   setCart([...cart, cartItem]);
  // };

  const addToCart = (painting) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === painting.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === painting.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...painting, qty: 1, cartId: uuidv4() }];
    });
  };

  ////

  const removeFromCart = (cartId) =>
    setCart(cart.filter((item) => item.cartId !== cartId));

  // const addToCart = (painting) => {
  //   console.log("Adding to cart:", painting);
  //   setCart([...cart, painting]);
  //   console.log(cart);
  // };
  // const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
