"use client";
import React from "react";

export const orderContext = React.createContext();
export default function OrderProvider({ children }) {
  const [orderOptions, setOrderOptions] = React.useState({
    coffeFlavor: "",
    coffeType: "",
    coffeeAmount: "",
    coffeeGrind: "",
    coffeeTime: "",
  });
  return (
    <orderContext.Provider value={{ orderOptions, setOrderOptions }}>
      {children}
    </orderContext.Provider>
  );
}
