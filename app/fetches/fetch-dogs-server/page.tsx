import React from "react";

type Breeds = {
  id: number;
  name: string;
  temperament: string;
  bred_for: string;
};

async function getBreeds() {
  const response = await fetch("https://api.thedogapi.com/v1/breeds");
  const data = await response.json();
  return data;
}

async function FetchDogsPage() {
  const breeds: Breeds[] = await getBreeds();

  return (
    <>
      <div>
        <h1>
          <span style={{ color: "red", display: "block" }}>
            CODE IS SERVER SIDE
          </span>
          My Breed Tables - Example of how to loop an array of objects new
          version
        </h1>
        {breeds.map((breed: Breeds) => (
          <div>{breed.name}</div>
        ))}
      </div>
    </>
  );
}

export default FetchDogsPage;
