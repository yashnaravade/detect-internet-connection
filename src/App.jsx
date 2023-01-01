import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CheckConnection from "./components/CheckConnection";
function App() {
  const [count, setCount] = useState(0);

  return (
    <CheckConnection>
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h3>
          You are online <span role="img">🎉</span>
        </h3>
      </div>
    </div>
    </CheckConnection>
  );
}

export default App;
