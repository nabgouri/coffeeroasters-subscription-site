"use client";
import { orderContext } from "../context/OrderProvider";
import React from "react";
export default function OrderSummary() {
  const { orderOptions } = React.useContext(orderContext);
  const { preferences, beanType, quantity, grindOption, deliveries } =
    orderOptions;
  return (
    <div className="text-white py-8 px-6 rounded-lg bg-[#2c343e] mt-[7.5rem] mb-14">
      <h4 className="font-barlow leading-6 opacity-50 text-base mb-2">
        ORDER SUMMARY
      </h4>
      <p className="font-fraunces font-black text-2xl leading-10 ">
        "I drink my cooffee as <DynamicText>{preferences}</DynamicText>, with a{" "}
        <DynamicText> {beanType}</DynamicText> type of bean.{" "}
        <DynamicText> {quantity}</DynamicText> ground ala{" "}
        <DynamicText> {grindOption}</DynamicText>, Sent to me{" "}
        <DynamicText> {deliveries} </DynamicText>."
      </p>
    </div>
  );
}

function DynamicText({ children }) {
  return <span className="text-darkCryan">{children}</span>;
}
