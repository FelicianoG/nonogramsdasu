import "./App.css";
import Game from "./components/Game";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game></Game>}>
          <Route path=":id" element={<Game></Game>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
