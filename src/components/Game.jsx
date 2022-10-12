import Description from "./Description";
import Logic from "./Logic";
import MyAppBar from "./MyAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createPortal } from "react-dom";
import { useState } from "react";
import HelpModal from "./HelpModal";
import nonogramTest from "../NonogramTest";
import { useParams } from "react-router-dom";

const theme = createTheme({ palette: { primary: { main: "#088" } } });

function Game() {
  let { id } = useParams();

  const [winBoard, setWinBoard] = useState(id ? nonogramTest[id] : nonogramTest.dog);
  const [modal, setModal] = useState(false);
  const portalito = createPortal(<HelpModal setModal={setModal} />, document.getElementById("modal"));

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

export default Game;
