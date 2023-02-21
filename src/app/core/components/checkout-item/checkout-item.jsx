const CheckoutItem = ({ item }) => {
  const { title } = item[0];
  return <div>{title}</div>;
};

export default CheckoutItem;
