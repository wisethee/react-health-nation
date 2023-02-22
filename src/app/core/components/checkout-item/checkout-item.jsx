import { Fragment } from "react";

const CheckoutItem = ({ item }) => {
  const { title } = item[0];
  const { amount } = item[0];

  return (
    <Fragment>
      <div className="flex flex-row justify-between mb-6">
        <h3 className="text-title-small md:text-title-medium text-secondary opacity-90">
          Charity Cause
        </h3>
        <p className="text-secondary opacity-80">{title}</p>
      </div>
      <div className="flex flex-row justify-between mb-6">
        <h3 className="text-title-small md:text-title-medium text-secondary opacity-90">
          Amount entered
        </h3>
        <p className="text-secondary opacity-80">{amount}</p>
      </div>
      <hr className="text-secondary opacity-60" />
      <div className="flex flex-row justify-between my-6">
        <h3 className="text-title-small md:text-title-large text-secondary opacity-90">
          Total
        </h3>
        <p className="text-secondary opacity-80">{amount}</p>
      </div>
      <hr className="text-secondary opacity-60" />
    </Fragment>
  );
};

export default CheckoutItem;
