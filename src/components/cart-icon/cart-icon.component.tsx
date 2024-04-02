import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// internal
// import { CartContext } from "../../contexts/cart.context";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

// styles
import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export default function CartIcon() {
  // const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const cartItemCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
 
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
}
