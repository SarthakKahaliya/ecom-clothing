import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";
import { useContext, useEffect, useState } from "react";

const CartIcon = (props) => {
  const { changeCartToggle, cartItems } = useContext(CartContext);

  // cartItems.map((cartItem) => {
  //   return (itemCount += cartItem.quantity);
  // });

  // if (itemCount > 99) {
  //   itemCount = "99+";
  // }

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const itemCount = cartItems.reduce((accumulator, cartItem) => {
      return (accumulator += cartItem.quantity);
    }, 0);
    setItemCount(itemCount);
  }, [cartItems]);

  return (
    <div className="cart-icon-container" onClick={changeCartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount > 99 ? "99+" : itemCount}</span>
    </div>
  );
};

export default CartIcon;
