import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

// internal
import {
  signInAuthUserWithEmailAndPassword,
  // signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

// styles
import { SignInContainer, ButtonContainer } from "./sign-in-form.styles";

// components
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  // reset form fields
  const resetFormFields = () => setFormFields(defaultFormFields);

  // sign in with Google
  // const signInWithGoogle = async () => await signInWithGooglePopup();
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  // handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // await signInAuthUserWithEmailAndPassword(email, password);
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (err: any) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("Incorrect Email");
          break;
        default:
          console.log(err.message);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
}
