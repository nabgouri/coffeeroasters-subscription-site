import { useRouter } from "next/navigation";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

export default function SummaryModal({ ref }) {
  const router = useRouter();
  function checkoutOrder() {
    router.push("/");
  }
  return (
    <dialog
      ref={ref}
      className="rounded-lg mx-6 md:mx-auto my-auto backdrop max-w-md md:w-full  pb-6 md:pb-14"
    >
      <OrderSummary
        title="Order Summary"
        titleStyle="font-fraunces font-black bg-darkCryanBlue text-[1.75rem] md:text-[2.5rem] leading-8 py-7 px-6 md:px-10 rounded-t-lg md:pt-12 md:pb-10"
        paragraphStyle="bg-white text-grey px-6 md:px-10 mt-10"
      >
        <p className="font-barlow text-base leading-6 text-darkCryanBlue opacity-80 mb-6 px-6 md:px-10">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.{" "}
        </p>
        <Button className="mx-6 md:hidden">Checkout-14.00 / mo </Button>
        <div className="px-10 hidden md:flex gap-3.5 ">
          <span className="text-darkCryanBlue font-fraunces font-black text-[2rem]">
            $14.00 / mo
          </span>
          <Button onClick={() => checkoutOrder()}>Checkout</Button>
        </div>
      </OrderSummary>
    </dialog>
  );
}
