import { Fragment, useContext } from "react";

import Section from "../../core/components/section/section";
import CheckoutItem from "../../core/components/checkout-item/checkout-item";
import { CheckoutContext } from "../../core/contexts/checkout";
import FormInput from "../../core/components/form-input/form-input";
import Button from "../../core/components/button/button";

const Checkout = () => {
  const { checkoutItem } = useContext(CheckoutContext);

  if (checkoutItem.length > 0) {
    return (
      <Fragment>
        <section className="section-title pt-8">
          <div className="px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-12">
              <h1 className="text-headline-medium md:text-display-small lg:text-display-medium mb-3">
                Secure Checkout
              </h1>
            </div>
          </div>
        </section>
        <Section
          height={"h-full"}
          padding={"pt-0 pb-16 md:py-16"}
          bgClass={"charity1-bg"}
          name={"checkout"}
        >
          <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start gap-12 order-1 md:order-0">
            <form
              // onSubmit={handleSubmit}
              className="flex flex-col gap-6 items-center md:items-start w-full"
            >
              <FormInput
                required
                type="text"
                label={"Card Number"}
                placeholder="1234-5678-XXXX-XXXX"
                name="cardNumber"
              />
              <span className="flex flex-col w-full text-secondary opacity-60 mb-[-22px]">
                Expiration date
              </span>
              <div className="flex rounded-full gap-4  w-full">
                <FormInput
                  required
                  type="text"
                  label={""}
                  name="month"
                  placeholder="Month"
                />
                <FormInput
                  required
                  type="text"
                  label={""}
                  name="year"
                  placeholder="Year"
                />
                <FormInput
                  required
                  type="text"
                  label={""}
                  name="code"
                  placeholder="Security code"
                />
              </div>
              <FormInput
                required
                type="text"
                label={"Name on card"}
                name="name"
                placeholder="John Smith"
              />
              <Button
                type="submit"
                buttonType={"secondary"}
                textTransform={"uppercase"}
                shadow={"shadow-sm"}
                other={"mt-8"}
              >
                Confirm payment
                <span className="pl-2" aria-hidden="true">
                  &rarr;
                </span>
              </Button>
            </form>
          </div>

          <div className="flex flex-col w-full md:w-1/2 justify-center items-center mb-12 md:mb-0 order-0 md:order-1 p-12 shadow-sm bg-white mt-12 md:mt-0">
            <div className="flex justify-center relative flex-col w-full">
              {checkoutItem.map((item) => (
                <CheckoutItem key={item.id} item={checkoutItem} />
              ))}
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
};

export default Checkout;
