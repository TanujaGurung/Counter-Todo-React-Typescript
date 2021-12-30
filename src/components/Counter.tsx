import React, { useContext } from "react";
import CounterProvider, { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Counter;
