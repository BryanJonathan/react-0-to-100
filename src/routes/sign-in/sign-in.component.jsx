import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGNIN</h1>
      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE POPUP</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
