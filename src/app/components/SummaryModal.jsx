import Button from "./Button";
import OrderSummary from "./OrderSummary";

export default function SummaryModal() {
  return (
    <div className="rounded-lg flex flex-col ">
      <OrderSummary
        title="Order Summary"
        titleStyle="font-fraunces font-black bg-darkCryanBlue text-[1.75rem] leading-8 py-7 px-6 rounded-t-lg"
        paragraphStyle="bg-white text-grey px-6 mt-10"
      >
        <p className="font-barlow text-base leading-6 text-darkCryanBlue opacity-80 mb-6 px-6">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.{" "}
        </p>
        <Button className="mx-6 ">Checkout-14.00 / mo </Button>
      </OrderSummary>
    </div>
  );
}
