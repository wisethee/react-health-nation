import { firebaseApp } from "./init.firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const db = getFirestore(firebaseApp);

export const createUserDocument = async (user, additionalInformation = {}) => {
  // If no user, return
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  // If user document does not exist, create it
  if (!userDoc.exists()) {
    // Create user document
    const { email, displayName, photoURL, uid } = user;

    // Set createdAt to current timestamp
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        uid,
        email,
        displayName,
        photoURL,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
};
