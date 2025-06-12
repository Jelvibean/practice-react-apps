// pages/index.tsx
import "../styles/globals.scss"; // Import global styles

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
        <li>
          <a href="/cache-example">Fetch & Caching on Client side</a>
        </li>
        <li>
          <a href="fetches/fetch-flights-server-cache">
            Fetching & Caching on server side
          </a>
        </li>
      </ul>

      <ul className="main-table">
        <li className="column link">
          <a href="/cache-example">Fetch & Caching on Client side</a>
        </li>
        <li className="column description">
          This is the example of how you would fetch data and cache is on the
          client side.
        </li>

        <li className="column link">
          <a href="fetches/fetch-flights-server-cache">
            Fetching & Caching on server side
          </a>
        </li>
        <li className="column description">Two</li>
      </ul>
    </>
  );
};

export default HomePage;
