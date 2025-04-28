// pages/index.tsx

import React from "react";

const HomePage = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/todo">Todo Demo</a>
        </li>
        <li>
          <a href="/fetches/fetch-dogs">Fetch - Array list of dogs</a>
        </li>
        <li>
          <a href="/fetches/fetch-pug">Fetch - Object of just one dog</a>
        </li>
        <li>
          <a href="/fetches/fetch-attempts">Fetch - Attempts with () and ""</a>
        </li>
        <li>
          <a href="/fetches/fetch-flights">Fetch - Flights</a>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
