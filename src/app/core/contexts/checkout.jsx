import { createContext, useState } from "react";

const addCartItem = (checkoutItem, itemToAdd) => {
  // if cartItem is empty, add itemToAdd to cartItem
  if (checkoutItem.length === 0) {
    return [{ ...itemToAdd, amount: checkoutItem.amount }];
  }
};

export const CheckoutContext = createContext({
  checkoutItem: [],
  addItem: () => {},
});

export const CheckoutProvider = ({ children }) => {
  const [checkoutItem, setCheckoutItem] = useState([]);
  const addItem = (itemToAdd) => {
    console.log(itemToAdd);
    setCheckoutItem(addCartItem(checkoutItem, itemToAdd));
  };

  const value = { addItem, checkoutItem };
  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
