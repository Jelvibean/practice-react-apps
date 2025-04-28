"use client";
import React from "react";
import { useState, useEffect } from "react"; // come back needed help.

const FetchAttempt = () => {
  type User = {
    id: number;
    name: string;
    username: string;
  };
  //Step 1 build a UseState to house the data you get back.
  const [userData, setUserdata] = useState([]);

  //Step 2 make the fetch and do it in a useEffect so it updates on render your userData state.
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserdata(data);
      } catch (error) {
        console.log("oops");
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div>
        <h2>List of Users: - example of using both () and brackets-{}-</h2>
      </div>
      <h3>This is used ()</h3>
      <div>Use () when you're directly returning JSX (shorter syntax).</div>
      <ul>
        {userData.map((user: User) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.username}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <h3>This version used "{}"</h3>
        <div>
          Use {} when you need to add more logic before returning, like
          processing data or declaring variables.
        </div>
        <ul>
          {userData.map((user: User) => {
            return (
              <li>
                {user.name} - {user.username}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FetchAttempt;
