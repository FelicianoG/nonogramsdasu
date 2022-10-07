import "./App.css";
import Description from "./components/Description";
import Logic from "./components/Logic";
import MyAppBar from "./components/MyAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createPortal } from "react-dom";
import { useState } from "react";
import HelpModal from "./components/HelpModal";
import Switch from "./components/Switch";
import { gato as test } from "./NonogramTest";

const theme = createTheme({ palette: { primary: { main: "#088" } } });

function App() {
  const [winBoard, setWinBoard] = useState(test);
  const [modal, setModal] = useState(false);
  const portalito = createPortal(
    <HelpModal setModal={setModal} />,
    document.getElementById("modal")
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {modal ? portalito : null}
        <header className="App-header">
          <MyAppBar setModal={setModal} />
          <div className="game-container">
            <Logic winBoard={winBoard} setWinBoard={setWinBoard}>
              <Description />
            </Logic>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
