import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = (props) => {
  const { changeCartToggle } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={changeCartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
