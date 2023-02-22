import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/db.firebase";

// Create a context object with a default value
export const DataContext = createContext({ data: {} });

// Create a provider component that wraps the app and makes the context object available
// to any child component that calls useCauseContext()
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getDataMap = async () => {
      const dataMap = await getCategoriesAndDocuments();
      setData(dataMap);
    };
    getDataMap();
  }, []);

  const value = { data };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
