import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Count: {count}</h2>

      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
