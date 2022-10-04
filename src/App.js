import "./App.css";
import Description from "./components/Description";
import Logic from "./components/Logic";
import MyAppBar from "./components/MyAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { treasure as test } from "./NonogramTest";
import { createPortal } from "react-dom";
import { useState } from "react";

const theme = createTheme({ palette: { primary: { main: "#088" } } });

function App() {
  const [modal, setModal] = useState(false);
  const portalito = createPortal(
    <div
      className="modal"
      style={{
        backgroundColor: "rgba(0,0,0,.5)",
        padding: "20px",
        color: "white",
        position: "fixed",
        top: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        onClick={() => {
          setModal((prev) => {
            return !prev;
          });
        }}
        style={{ padding: "40px", backgroundColor: "#008080", color: "white" }}
      >
        Hello motto!
      </h1>
    </div>,
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
