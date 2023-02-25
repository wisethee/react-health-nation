import { firebaseApp } from "./init.firebase";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

export const db = getFirestore(firebaseApp);

// Add DATA as collection to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

//
export const getCategoriesAndDocuments = async () => {
  // Get a ref to the collection
  const collectionRef = collection(db, "data");
  // Create a query against the collection
  const q = query(collectionRef);
  // Get a list of docs from db
  const snapshot = await getDocs(q);

  const dataMap = snapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return dataMap;
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
