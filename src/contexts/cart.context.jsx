// // NO LONGER USE THIS FILE
// import { createContext, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// // Add item to cart
// export const addCartItem = (cartItems, productToAdd) => {
//   // Check if product to add already in cart items
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   // If yes, increment the quantity
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   // if no item in cart
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// // Remove item from cart
// export const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find cart item to remove in cart items
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // Remove the item from card if its quantity is equal to 1
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// // Clear item from cart
// export const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartItemCount: 0,
//   cartTotalPrice: 0,
// });

// export const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartItemCount: 0,
//   cartTotalPrice: 0,
// };

// // Reducer function
// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return { ...state, ...payload };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return { ...state, isCartOpen: payload };
//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//   const { isCartOpen, cartItems, cartItemCount, cartTotalPrice } = state;

//   const updateCartItemsReducer = (newCartItems) => {
//     const newItemCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     const newPriceCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.price * cartItem.quantity,
//       0
//     );
//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartItemCount: newItemCount,
//         cartTotalPrice: newPriceCount,
//       })
//     );
//   };

//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };

//   const removeItemFromCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartItems,
//     cartItemCount,
//     cartTotalPrice,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
