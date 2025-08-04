"use client";
import Hero from "../components/Hero";
import subscribeImage from "@/app/assets/images/subscribe/image-hero-blackcup-mobile.jpg";
import subscribeDesktop from "@/app/assets/images/subscribe/image-hero-blackcup-desktop.jpg";
import subscribeTablet from "@/app/assets/images/subscribe/image-hero-blackcup-tablet.jpg";

import ItemsList from "../components/ItemsList";
import SelectorOption from "../components/SelectorOption";
import OrderSummary from "../components/OrderSummary";
import Button from "../components/Button";
import OrderFlow from "../components/OrderFlow";
import SummaryModal from "../components/SummaryModal";
import React from "react";
import { orderContext } from "../context/OrderProvider";

const orderFlow = [
  {
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning  world-class coffees curated to provide a distinct tasting experience.",
  },
];

const CoffeeCombination = [
  {
    title: "How do you drink your coffee?",
    options: [
      {
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
    request: "preferences",
  },
  {
    title: "What type of coffee?",
    options: [
      {
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
    request: "beanType",
  },
  {
    title: "How much would you like?",
    options: [
      {
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
    request: "quantity",
  },
  {
    title: "Want us to grind them?",
    options: [
      {
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
    request: "grindOption",
  },
  {
    title: "How often should we deliver?",
    options: [
      {
        title: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
    request: "deliveries",
  },
];
export default function SubscribePage() {
  const modalRef = React.useRef();
  const [isSelecterOpen, setIsSelectorOpen] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const { orderOptions } = React.useContext(orderContext);
  let isOrderCompleted = Object.values(orderOptions).every(
    (value) => value !== ""
  );

  return (
    <article className="flex flex-col items-center">
      <Hero
        background={subscribeImage}
        backgroundTablet={subscribeTablet}
        backgroundDesktop={subscribeDesktop}
        title="Create your plan"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
      />
      <ItemsList isPrimaryTheme={false} items={orderFlow} ListType="ol" />

      <div className="flex gap-[7.75rem]">
        <OrderFlow
          isSelectorOpen={isSelecterOpen}
          setIsSelectorOpen={setIsSelectorOpen}
        />
        <div className="flex flex-col ">
          <div className="flex flex-col gap-24 w-full justify-between">
            {CoffeeCombination.map(({ title, options, request }, index) => (
              <SelectorOption
                key={index}
                title={title}
                options={options}
                request={request}
                isSelectorOpen={isSelecterOpen}
                setIsSelectorOpen={setIsSelectorOpen}
                index={index}
              />
            ))}
          </div>
          <OrderSummary
            className=" py-8 px-6 bg-[#2c343e] mt-[7.5rem] mb-14"
            titleStyle="font-barlow leading-6 opacity-50 text-base mb-2"
            title="ORDER SUMMARY"
          />
          <Button
            disabled={!isOrderCompleted}
            onClick={() => modalRef.current.showModal()}
            className=" self-center xl:self-end disabled:bg-[#E2DEDB] disabled:cursor-pointe"
          >
            Create my plan!
          </Button>
          <SummaryModal ref={modalRef} />
        </div>
      </div>
    </article>
  );
}
