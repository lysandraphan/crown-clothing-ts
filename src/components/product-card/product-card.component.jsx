import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// internal
// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

// styles
import "./product-card.styles.scss";

// components
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)

  // add product to cart
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
}
