import "./App.css";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid size={200} rowNum={3} columnNum={3}></Grid>
      </header>
    </div>
  );
}

export default App;
