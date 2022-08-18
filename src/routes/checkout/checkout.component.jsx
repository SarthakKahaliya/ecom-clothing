import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import { Fragment } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  // eslint-disable-next-line no-unused-vars
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-label-container">
        <span className="image">Image</span>
        <div className="labels">
          <span className="name">Name</span>
          <span className="price">Price</span>
          <span className="quantity">Quantity</span>
          <span className="sub-total">SubTotal</span>
          <span>Remove</span>
        </div>
      </div>
      <hr />
      <div>
        {cartItems.map((cartItem) => {
          return (
            <Fragment>
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
