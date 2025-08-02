"use client";
import { orderContext } from "../context/OrderProvider";
import React from "react";
export default function OrderSummary({
  children,
  titleStyle,
  paragraphStyle,
  title,
  className,
}) {
  const { orderOptions } = React.useContext(orderContext);
  const { preferences, beanType, quantity, grindOption, deliveries } =
    orderOptions;
  return (
    <div className={`text-white rounded-lg  mt-[7.5rem] mb-14 ${className}`}>
      <h4 className={` ${titleStyle}`}>{title}</h4>
      <p
        className={`font-fraunces font-black text-2xl leading-10 ${paragraphStyle} `}
      >
        "I drink my cooffee as <DynamicText>{preferences}</DynamicText>, with a{" "}
        <DynamicText> {beanType}</DynamicText> type of bean.{" "}
        <DynamicText> {quantity}</DynamicText> ground ala{" "}
        <DynamicText> {grindOption}</DynamicText>, Sent to me{" "}
        <DynamicText> {deliveries} </DynamicText>."
      </p>
      {children}
    </div>
  );
}

function DynamicText({ children }) {
  return <span className="text-darkCryan">{children}</span>;
}
