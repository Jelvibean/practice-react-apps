"use client";

import { SelectedNameProvider } from "../../app/context/SelectedNameContext";
import { NameList } from "./NameList";

export const NameSelector = () => {
  return (
    <SelectedNameProvider>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <NameList title="List A" />
        <NameList title="List B" />
        <NameList title="List C" />
      </div>
    </SelectedNameProvider>
  );
};
