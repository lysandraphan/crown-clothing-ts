import SignUpForm from "../../components/sign-up-form/sign-up-form";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

// components
import Button from "../../components/button/button.component";
import LoginForm from "../../components/login-form/login-form.component";


export default function Login() {
//   useEffect(async () => {
//     const res = await getRedirectResult(auth);

//     if (res) {
//       const userDocRef = await createUserDocFromAuth(res.user);
//     }
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
   await createUserDocFromAuth(user);
  };

  return (
    <div>
      <LoginForm />
      <Button buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
}
