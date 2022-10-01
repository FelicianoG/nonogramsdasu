import "./App.css";
import Description from "./components/Description";
import Logic from "./components/Logic";
import MyAppBar from "./components/MyAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { treasure as test } from "./NonogramTest";

const theme = createTheme({ palette: { primary: { main: "#088" } } });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <MyAppBar />
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
