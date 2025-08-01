import React from "react";
import { orderContext } from "../context/OrderProvider";

export default function Option({ option, request, ...rest }) {
  const { title, description } = option;
  const { orderOptions } = React.useContext(orderContext);
  const isAcitve =
    orderOptions[request] === title
      ? "bg-darkCryan text-background"
      : "bg-[#F4F1EB] text-darkCryanBlue";
  return (
    <li
      className={` p-6 rounded-lg ${isAcitve} hover:bg-paleOrange xl:pb-[5.5rem] `}
      {...rest}
    >
      <h3 className="font-fraunces text-2xl leading-8  font-black mb-2">
        {title}
      </h3>
      <p className=" font-barlow leading-7">{description}</p>
    </li>
  );
}
