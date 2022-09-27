import "./App.css";
import Description from "./components/Description";
import Logic from "./components/Logic";
import { dog } from "./NonogramTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logic winBoard={dog}>
          <Description />
        </Logic>
      </header>
    </div>
  );
}

export default App;
