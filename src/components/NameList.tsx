"use client";

import { useContext } from "react";
import { SelectedNameContext } from "../../app/context/SelectedNameContext";

const names = [
  "Calista",
  "Christian",
  "Joseph",
  "Yelvy",
  "EvelynP",
  "EvelynB",
  "Helen",
  "Carlos",
];

export const NameList = ({ title }) => {
  const { selectedName, setSelectedName } = useContext(SelectedNameContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h3>{title}</h3>
      {names.map((name) => (
        <div
          key={name}
          onClick={() => setSelectedName(name)}
          style={{
            cursor: "pointer",
            backgroundColor: selectedName === name ? "lightblue" : "white",
            padding: "4px",
            margin: "4px 0",
            borderRadius: "4px",
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
