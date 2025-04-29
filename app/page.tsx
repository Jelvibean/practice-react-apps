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
          <a href="/fetches/fetch-dogs-client">
            Fetch - Array list of dogs - showing client side logic
          </a>
        </li>
        <li>
          <a href="/fetches/fetch-dogs-server">
            Fetch - Array list of dogs - showing server side logic
          </a>
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
        <li>
          <a href="/fetches/fetch-flights-hybrid">Fetch - Flights- Hybrid</a>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
