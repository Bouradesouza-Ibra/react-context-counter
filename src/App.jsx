import { CounterProvider, useCounter } from "./context/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

function SecondCounterDisplay() {
  const { count } = useCounter();

  return <h3>Second Display: {count}</h3>;
}

function ChangeLog() {
  const { log } = useCounter();

  return (
    <div>
      <h3>Change Log</h3>
      <ul>
        {log.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <div>
        <h1>React Context Counter App</h1>

        <CounterDisplay />
        <CounterControls />

        <SecondCounterDisplay />
        <ChangeLog />
      </div>
    </CounterProvider>
  );
}

export default App;