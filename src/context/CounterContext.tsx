import React, { createContext, useState, FC } from "react";

interface CounterContextState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const contextDefaultValues: CounterContextState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

export const CounterContext =
  createContext<CounterContextState>(contextDefaultValues);

const CounterProvider: FC = ({ children }) => {
  const [count, setCount] = useState<number>(contextDefaultValues.count);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
