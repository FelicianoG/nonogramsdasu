import "./App.css";
import Description from "./components/Description";
import Logic from "./components/Logic";
import MyAppBar from "./components/MyAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dog as test } from "./NonogramTest";
import { createPortal } from "react-dom";
import { useState } from "react";
import HelpModal from "./components/HelpModal";
import Switch from "./components/Switch";

const theme = createTheme({ palette: { primary: { main: "#088" } } });

function App() {
  const [modal, setModal] = useState(false);
  const portalito = createPortal(
    <HelpModal setModal={setModal} />,
    document.getElementById("modal")
  );
  return (
    <ThemeProvider theme={theme}>
      {modal ? portalito : null}

      <div className="App">
        <header className="App-header">
          <MyAppBar setModal={setModal} />
          <div className="game-container">
            <Logic winBoard={test}>
              <Description />
            </Logic>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
