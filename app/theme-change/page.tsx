"use client";
import { ThemeProvider } from "../context/ThemeContext";
import Page from "../../src/components/Page"; // make sure this is right too

const ThemeChange = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
};

export default ThemeChange;
