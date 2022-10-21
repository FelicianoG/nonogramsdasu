import "./App.css";
import Game from "./components/Game";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Game></Game>}>
          <Route path=":id" element={<Game></Game>}></Route>
        </Route>
        <Route path="/" element={<Game></Game>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
