import { createContext, useState } from "react";

import { DATA } from "../../data/data";

// Create a context object with a default value
export const DataContext = createContext({ data: [] });

// Create a provider component that wraps the app and makes the context object available
// to any child component that calls useCauseContext()
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(DATA);
  const value = { data };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
