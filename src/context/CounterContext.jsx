import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);

  function increment() {
    setCount(count + 1);
    setLog([...log, "Incremented by 1"]);
  }

  function decrement() {
    setCount(count - 1);
    setLog([...log, "Decremented by 1"]);
  }

  function reset() {
    setCount(0);
    setLog([...log, "Counter reset"]);
  }

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, reset, log }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}