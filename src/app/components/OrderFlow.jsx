"use client";
import next from "next";
import React from "react";
import { orderContext } from "../context/OrderProvider";

export default function OrderFlow({ isSelectorOpen, setIsSelectorOpen }) {
  const orderSteps = [
    "Preferences",
    "Bean Type",
    "Quantity",
    "Grind Option",
    "Deliveries",
  ];
  const { orderOptions } = React.useContext(orderContext);
  function toggleHandler(index) {
    const nextToggleArray = [...isSelectorOpen];
    nextToggleArray[index] = !nextToggleArray[index];
    setIsSelectorOpen(nextToggleArray);
  }
  return (
    <ol className="list-decimal hidden xl:flex flex-col gap-6">
      {orderSteps.map((orderStep, index) => {
        return (
          <li
            className={`font-fraunces text-2xl marker:none leading-8 pb-6 border-b-[1px] list-none font-black hover:opacity-100 cursor-pointer border-grey ${
              isSelectorOpen[index]
                ? "text-darkCryanBlue opacity-100"
                : "text-grey opacity-40 "
            } `}
            key={index}
          >
            <button
              className={`flex gap-7 ${
                orderOptions.preferences === "Capsule" && index === 3
                  ? "cursor-not-allowed opacity-20"
                  : "cursor-pointer "
              }`}
              onClick={() => toggleHandler(index)}
              disabled={orderOptions.preferences === "Capsule" && index == 3}
            >
              <span
                className={`${
                  isSelectorOpen[index] ? "text-darkCryan" : "text-grey"
                }`}
              >
                0{index + 1}
              </span>
              {orderStep}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
