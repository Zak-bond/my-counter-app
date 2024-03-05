import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = useState("0");

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  let reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter-options">
        <p className="counter-display">{count}</p>
        <div className="counter-buttons">
          <button onClick={increment} className="increment bttn counter-button">
            Increment
          </button>
          <button onClick={decrement} className="decrement bttn counter-button">
            Decrement
          </button>
          <button onClick={reset} className="reset counter-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
