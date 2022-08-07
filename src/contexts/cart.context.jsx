import { createContext, useState } from "react";

export const CartContext = createContext({
  cartToggle: null,
  setcartToggle: () => null,
  cartItems: [],
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartToggle, setcartToggle] = useState(false);

  const changeCartToggle = () => {
    setcartToggle(!cartToggle);
  };

  const [cartItems, setCartItems] = useState([]);

  const value = { cartToggle, changeCartToggle, cartItems, setCartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
