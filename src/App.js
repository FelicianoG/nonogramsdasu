import "./App.css";
import Description from "./components/Description";
import { useState, useEffect } from "react";
import Logic from "./components/Logic";
import { purina } from "./NonogramTest";

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
        <Logic winBoard={purina}>
          <Description size={zoom} />
        </Logic>
      </header>
    </div>
  );
}

export default App;
