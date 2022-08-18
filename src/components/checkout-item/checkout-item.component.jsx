import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(cartItem);
  };

  const removeProductFromCart = () => {
    removeItemFromCart(cartItem);
  };

  const clearProductFromCart = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <Fragment>
      <div className="checkout-item-container">
        <div className="item-container">
          <img src={imageUrl} alt={name} />
          <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
            <span className="quantity">
              <span className="button" onClick={removeProductFromCart}>
                {`<`}
              </span>
              {"  "}
              {quantity}
              {"  "}
              <span className="button" onClick={addProductToCart}>
                {`>`}
              </span>
            </span>
            <span className="total">{quantity * price}</span>
            <span className="button-clear" onClick={clearProductFromCart}>
              X
            </span>
          </div>
        </div>
        <hr />
      </div>
    </Fragment>
  );
};

export default CheckoutItem;
