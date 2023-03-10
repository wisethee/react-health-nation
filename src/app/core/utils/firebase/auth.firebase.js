import { firebaseApp } from "./init.firebase";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// export the auth object from firebase
export const auth = getAuth(firebaseApp);

// create a new instance of the GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();

// set the custom parameters, in this case we are asking for the user's email
googleProvider.setCustomParameters({ prompt: "select_account" });

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

export const signOutAuthUser = async () => await signOut(auth);

// onAuthStateChanged is a function that will listen for any changes in the
// authentication state of the user
export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
