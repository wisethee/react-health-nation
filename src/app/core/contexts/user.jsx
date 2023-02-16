import { createContext, useState } from "react";

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
