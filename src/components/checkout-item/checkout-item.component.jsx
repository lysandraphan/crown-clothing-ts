// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

// internal
// import { CartContext } from "../../contexts/cart.context";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

// styles
import "./checkout-item.styles.scss";

export default function CheckoutItem({ checkoutItem }) {
  const { name, quantity, price, imageUrl } = checkoutItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));

  return (
    <div className="checkout-item-container ">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
