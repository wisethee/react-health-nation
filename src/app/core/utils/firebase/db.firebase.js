import { firebaseApp } from "./init.firebase";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

export const db = getFirestore(firebaseApp);

// Add DATA as collection to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

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
