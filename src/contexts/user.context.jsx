// // NO LONGER USE THIS FILE
// import { useEffect, useReducer, createContext } from "react";
// import {
//   createUserDocFromAuth,
//   onAuthStateChangedListener,
// } from "../utils/firebase/firebase.utils";
// import { createAction } from "../utils/reducer/reducer.utils";

// // The actual value that provider wants to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// // This provider allows its children component to access the value inside the useState
// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const { currentUser } = state;
//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };
//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsub = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocFromAuth(user);
//       }
//       setCurrentUser(user);
//     });

//     return unsub;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
