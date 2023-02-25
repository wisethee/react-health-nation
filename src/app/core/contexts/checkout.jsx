import { createContext, useState, useEffect } from "react";

export const CheckoutContext = createContext({
  checkoutItem: [],
  addItem: () => {},
});

export const CheckoutProvider = ({ children }) => {
  const [checkoutItem, setCheckoutItem] = useState([]);
  const addItem = (itemToAdd) => {
    // setCheckoutItem([{ ...itemToAdd, amount: checkoutItem.amount }]);
    setCheckoutItem([{ ...itemToAdd }]);
  };

  const value = { addItem, checkoutItem };
  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
