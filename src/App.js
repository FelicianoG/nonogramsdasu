import "./App.css";
import Description from "./components/Description";
import { useState, useEffect } from "react";

const winTest = [
  [false, true, false, true, false, false, true, false, true, true, false],
  [false, true, false, false, false, false, true, false, true, true, false],
  [true, true, false, true, false, false, true, false, true, true, false],
  [false, false, true, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
  [true, true, false, true, true, false, true, false, true, true, false],
];

function App() {
  const [zoom, setZoom] = useState(200);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w": {
          setZoom((prev) => prev + 10);
          break;
        }
        case "s": {
          setZoom((prev) => prev - 10);
          break;
        }
        default: {
          return;
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Description size={zoom} winBoard={winTest} />
      </header>
    </div>
  );
}

export default App;
