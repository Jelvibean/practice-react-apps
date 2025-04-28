"use client"; // context uses useState, so must be a client component
import { createContext, useState } from "react";

export const SelectedNameContext = createContext(); // returns an object that provides two components "Provider and Consumer"

export function SelectedNameProvider({ children }) {
  const [selectedName, setSelectedName] = useState(null);

  return (
    <SelectedNameContext.Provider value={{ selectedName, setSelectedName }}>
      {children}
    </SelectedNameContext.Provider>
  );
}

//React  vs      	Angular Equivalent
//useState(null) ====	new BehaviorSubject(null)
//setSelectedName('Bob') ====	selectedName$.next('Bob')
