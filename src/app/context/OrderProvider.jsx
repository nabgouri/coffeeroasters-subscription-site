"use client";
import React from "react";

export const orderContext = React.createContext();
export default function OrderProvider({ children }) {
  const [orderOptions, setOrderOptions] = React.useState({
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  });
  return (
    <orderContext.Provider value={{ orderOptions, setOrderOptions }}>
      {children}
    </orderContext.Provider>
  );
}
