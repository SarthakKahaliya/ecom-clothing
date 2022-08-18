import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const totalSum = cartItems.reduce((accumulator, cartItem) => {
      return (accumulator += cartItem.quantity * cartItem.price);
    }, 0);

    setTotalSum(totalSum);
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="empty-message">Add Items to Cart</span>
        ) : (
          <span className="clear-all" onClick={clearCart}>
            Clear All
          </span>
        )}
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <span>Total: ${totalSum}</span>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
