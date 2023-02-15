import { firebaseApp } from "./init.firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

// createUserWithEmailAndPassword is a function that will create a new user
// with the email and password provided
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if the email or password are not provided, return
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// signInWithEmailAndPassword is a function that will sign in an existing user
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // if the email or password are not provided, return
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
