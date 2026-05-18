import { useCounter } from "../context/CounterContext";

function CounterDisplay() {
  const { count } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
}

export default CounterDisplay;