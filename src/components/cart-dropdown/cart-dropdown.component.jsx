// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// internal
// import { CartContext } from "../../contexts/cart.context";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

// styles
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

// components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

export default function CartDropdown() {
  // const { cartItems, setIsCartOpen } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}
