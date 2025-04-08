import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss"; // Import global styles
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
