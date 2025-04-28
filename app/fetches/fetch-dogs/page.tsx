"use client";
import React from "react";
import { useState, useEffect } from "react";

const FetchDogs = () => {
  type Breeds = {
    id: number;
    name: string;
    temperament: string;
    bred_for: string;
  };
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.log("oops you are not getting you breeds");
      }
    };

    fetchBreeds();
  }, []);

  return (
    <>
      <div>
        <h1>My Breed Tables - Example of how to loop an array of objects</h1>
        {breeds.map((breed: Breeds) => (
          <div>{breed.name}</div>
        ))}

        {/* {breeds.map((breed: Breeds) => {
          const lowerCaseTemp = breed.temperament?.toLowerCase() || "unknown"; // Default to 'unknown' if no temperament
          const lowerCasebredFor = breed.bred_for?.toLowerCase() || "unknown";
          return (
            <>
              <h3>{breed.name}</h3>
              <p>
                The {breed.name} can be {lowerCaseTemp}.
              </p>
              <p>They usually are best for {lowerCasebredFor}.</p>
              <hr></hr>
            </>
          );
        })} */}
      </div>
    </>
  );
};

export default FetchDogs;
