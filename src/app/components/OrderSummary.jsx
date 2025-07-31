"use client";
import { orderContext } from "../context/OrderProvider";
import React from "react";
export default function OrderSummary() {
  const { orderOptions } = React.useContext(orderContext);
  const { coffeFlavor, coffeType, coffeeAmount, coffeeGrind, coffeeTime } =
    orderOptions;
  return (
    <div className="text-white py-8 px-6 rounded-lg bg-[#2c343e] mt-[7.5rem] mb-14">
      <h4 className="font-barlow leading-6 opacity-50 text-base mb-2">
        ORDER SUMMARY
      </h4>
      <p className="font-fraunces font-black text-2xl leading-10 ">
        "I drink my cooffee as <DynamicText>Filter {coffeFlavor}</DynamicText>,
        with a <DynamicText>Decaf {coffeType}</DynamicText> type of bean.{" "}
        <DynamicText>250g {coffeeAmount}</DynamicText> ground ala{" "}
        <DynamicText>Cafetiere {coffeeGrind}</DynamicText>, Sent to me{" "}
        <DynamicText>Every Week {coffeeTime} </DynamicText>."
      </p>
    </div>
  );
}

function DynamicText({ children }) {
  return <span className="text-darkCryan">{children}</span>;
}
