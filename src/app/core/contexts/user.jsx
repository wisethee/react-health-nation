import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/auth.firebase";
import { createUserDocument } from "../utils/firebase/db.firebase";

// Create a context object with a default value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Create a provider component that wraps the app and makes the context object available
// to any child component that calls useUserContext()
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
