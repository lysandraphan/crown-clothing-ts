// import { useContext } from "react";
import { useSelector } from "react-redux";

// internal
// import { CartContext } from "../../contexts/cart.context";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

// styles
import "./checkout.styles.scss";

// components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

export default function Checkout() {
  // const { cartItems, cartTotalPrice } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotalPrice}.00</span>
    </div>
  );
}
