import "./cart-item.styles.scss";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
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
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <div className="add-remove">
          <span>
            <button className="button" onClick={removeProductFromCart}>
              -
            </button>{" "}
            <button className="button" onClick={addProductToCart}>
              +
            </button>
          </span>
          <span className="button-clear" onClick={clearProductFromCart}>
            clear
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
