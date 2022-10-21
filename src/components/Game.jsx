import Description from "./Description";
import Logic from "./Logic";
import MyAppBar from "./MyAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createPortal } from "react-dom";
import { useState } from "react";
import HelpModal from "./HelpModal";
import nonogramTest from "../NonogramTest";
import { useParams } from "react-router-dom";
import ColorContext from "../context/ColorContext";

function Game() {
  let { id } = useParams();

  const [drawMode, setDrawMode] = useState(false);
  function drawModeHandler() {
    setDrawMode((prev) => !prev);
  }

  const accentColor = drawMode ? "#802b00" : "#008080";

  const theme = createTheme({ palette: { primary: { main: accentColor } } });

  const [winBoard, setWinBoard] = useState(id ? nonogramTest[id] : nonogramTest.dog);
  const [modal, setModal] = useState(false);
  const portalito = createPortal(<HelpModal setModal={setModal} />, document.getElementById("modal"));

  const contextValue = { accentColor, drawMode };

  return (
    <ColorContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <div className="App">
          {modal ? portalito : null}
          <header className="App-header">
            <MyAppBar setModal={setModal} />
            <div className="game-container">
              <Logic drawMode={drawMode} drawModeHandler={drawModeHandler} winBoard={winBoard} setWinBoard={setWinBoard}>
                <Description />
              </Logic>
            </div>
          </header>
        </div>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default Game;
