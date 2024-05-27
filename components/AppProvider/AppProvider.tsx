"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

const initialData: any = {};
export const AppContext: any = createContext(initialData);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [contact, setContact] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<any>(undefined);

  const toggleContact = () => {
    setContact((prevTheme) => !prevTheme);
  };

  const managePaymentId = (prop: any) => {
    setPaymentId(prop);
  };

  return (
    <AppContext.Provider
      value={{ contact, toggleContact, managePaymentId, paymentId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }

  return context;
};
