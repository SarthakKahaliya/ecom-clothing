import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const foundItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (foundItem) {
    const indexOfFoundItem = cartItems.indexOf(foundItem);
    cartItems[indexOfFoundItem].quantity += 1;
    return [...cartItems];
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  const foundItem = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });
  if (foundItem) {
    if (foundItem.quantity > 1) {
      const indexOfFoundItem = cartItems.indexOf(foundItem);
      cartItems[indexOfFoundItem].quantity -= 1;
      return [...cartItems];
    } else {
      return clearCartItem(cartItems, productToRemove);
    }
  }
};

const clearCartItem = (cartItems, productToRemove) => {
  const foundItem = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });

  if (foundItem) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToRemove.id;
    });
  }
};

export const CartContext = createContext({
  cartToggle: null,
  setcartToggle: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartToggle, setcartToggle] = useState(false);

  const changeCartToggle = () => {
    setcartToggle(!cartToggle);
  };

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const updatedCartItems = removeCartItem(cartItems, productToRemove);
    setCartItems(updatedCartItems);
  };

  const clearItemFromCart = (productToRemove) => {
    const updatedCartItems = clearCartItem(cartItems, productToRemove);
    setCartItems(updatedCartItems);
  };

  const value = {
    cartToggle,
    changeCartToggle,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    setCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
