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
        <h2
          className="font-black font-fraunces text-2xl xl:text-[2.5rem] leading-7 text-grey "
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            viewBox="0 0 8 8"
            className={`w-10 h-10 ${isOpen ? "rotate-0" : " rotate-180 "} `}
          >
            <path
              // fill="currentColor"
              d="m2 5l2-2l2 2l1-1l-3-3l-3 3"
              className="  fill-darkCryan"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col md:flex-row gap-4 xl:mt-14 ">
          {options.map((option, index) => (
            <Option
              onClick={() => {
                setOrderOptions({
                  ...orderOptions,
                  [request]: option.title,
                });
                console.log(orderOptions);
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
