import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "./init.firebase";

// export the auth object from firebase
export const auth = getAuth(firebaseApp);

// create a new instance of the GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();

// set the custom parameters, in this case we are asking for the user's email
googleProvider.setCustomParameters({ prompt: "select_account" });

// signInWithGooglePopup is a function that will open a popup window
// and ask the user to sign in with their Google account
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
