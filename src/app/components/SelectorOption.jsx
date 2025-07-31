"use client";
import React from "react";
import Option from "./Option";
import { orderContext } from "../context/OrderProvider";
export default function SelectorOption({ title, options, request }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setOrderOptions, orderOptions } = React.useContext(orderContext);
  return (
    <section>
      <div className="flex items-center mb-[1.125rem] justify-between">
        <h2 className="font-black font-fraunces text-2xl leading-7 text-grey ">
          {title}
        </h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            viewBox="0 0 8 8"
            className="w-5 h-3.5 stroke-darkCryan text-darkCryan"
          >
            <path
              // fill="currentColor"
              d="m2 5l2-2l2 2l1-1l-3-3l-3 3"
              className=" text-darkCryan"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col md:flex-row gap-4">
          {options.map((option, index) => (
            <Option
              onClick={() => {
                setOrderOptions({ ...orderOptions, [request]: option.title });
              }}
              key={index}
              option={option}
            ></Option>
          ))}
        </ul>
      )}
    </section>
  );
}
