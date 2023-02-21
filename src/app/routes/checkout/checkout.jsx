import { useContext } from "react";

import CheckoutItem from "../../core/components/checkout-item/checkout-item";
import { CheckoutContext } from "../../core/contexts/checkout";

const Checkout = () => {
  const { checkoutItem } = useContext(CheckoutContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      {checkoutItem.map((item) => () => item && <CheckoutItem item={item} />)}
    </div>
  );
};

export default Checkout;
