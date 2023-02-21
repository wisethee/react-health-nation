const CheckoutItem = ({ checkoutItem }) => {
  const { title, amount } = checkoutItem;

  return (
    <div>
      {title}
      {amount}
    </div>
  );
};

export default CheckoutItem;
