"use client";
import React from "react";
import Option from "./Option";
import { orderContext } from "../context/OrderProvider";
export default function SelectorOption({
  title,
  options,
  request,
  isSelectorOpen,
  setIsSelectorOpen,
  index,
}) {
  const { setOrderOptions, orderOptions } = React.useContext(orderContext);
  function toggleHandler(index) {
    const nextToggleArray = [...isSelectorOpen];
    nextToggleArray[index] = !nextToggleArray[index];
    setIsSelectorOpen(nextToggleArray);
  }
  const isCapsuleSelected = orderOptions.preferences === "Capsule";
  return (
    <section>
      <div className="flex items-center mb-[1.125rem] justify-between">
        <h2
          className={`${
            isCapsuleSelected && index === 3 ? "opacity-40" : ""
          } font-black font-fraunces cursor-pointer text-2xl xl:text-[2.5rem] leading-7 text-grey `}
          onClick={() => toggleHandler(index)}
        >
          {title}
        </h2>
        <button onClick={() => toggleHandler(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            viewBox="0 0 8 8"
            className={`w-10 h-10 cursor-pointer  ${
              isSelectorOpen[index] ? "rotate-0" : " rotate-180 "
            } ${isCapsuleSelected && index === 3 ? "opacity-40" : ""} `}
          >
            <path
              // fill="currentColor"
              d="m2 5l2-2l2 2l1-1l-3-3l-3 3"
              className=" hover:fill-[#66D2CF] fill-darkCryan"
            ></path>
          </svg>
        </button>
      </div>
      {isSelectorOpen[index] && (
        <ul className="flex flex-col md:flex-row gap-4 xl:mt-14 ">
          {options.map((option, index) => (
            <Option
              onClick={() => {
                setOrderOptions({
                  ...orderOptions,
                  [request]: option.title,
                });
              }}
              key={index}
              option={option}
              request={request}
            ></Option>
          ))}
        </ul>
      )}
    </section>
  );
}
