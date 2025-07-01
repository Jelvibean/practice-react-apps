"use client";
import { useState } from "react";

const MyCounter = () => {
  const [count, setCounter] = useState(0);

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          disabled={count <= 0}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default MyCounter;
