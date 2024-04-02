import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

// internal
// import {
//   createUserDocFromAuth,
//   onAuthStateChangedListener,
//   getCurrentUser
// } from "./utils/firebase/firebase.utils";
import { setCurrentUser, checkUserSession } from "./store/user/user.action";

// components
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  // set current user
  // useEffect(() => {
  //   const unsub = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });
  //   return unsub;
  // // This dispatch does not change so useEffect won't re-run, can keep empty dependency []
  // }, [dispatch]);

  // useEffect(() => {
  //   getCurrentUser().then((user) => console.log(user))
  // }, []);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
