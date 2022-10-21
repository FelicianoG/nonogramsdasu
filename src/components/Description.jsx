import { rowColumnMaker } from "../utils";
import Grid from "./Grid";
import ColRow from "./ColRow";
import { useContext } from "react";
import ContextValue from "../context/ColorContext.js";
import CryptoJS from "crypto-js";

export default function Description({ win, drawMode, winBoard, size = 200, board, crosses, handleBoardClick, handleBoardDrag, rowNum, columnNum }) {
  const { accentColor } = useContext(ContextValue);
  const [winRow, winColumn] = rowColumnMaker(drawMode ? board : winBoard);

  const winColor = win ? "#00A0A0" : "#008080";
  const squareColor = drawMode ? accentColor : winColor;

  function shareHandler(arr) {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(arr), "secret key 123").toString();
    ciphertext = ciphertext.replace(/\//g, "feli");
    console.log(ciphertext);
    navigator.clipboard.writeText("localhost:3000/user/" + ciphertext);
  }

  return (
    <div className="board">
      <div className="board-top-column">
        <h6
          onClick={() => shareHandler(board)}
          style={{
            fontSize: "3rem",
            margin: "0",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: squareColor,
          }}
        >
          {drawMode ? "D" : "N"}
        </h6>
        <ColRow size={size} arr={winColumn} isCol={true} rowNum={rowNum} columnNum={columnNum} />
      </div>
      <div className="board-bot-column">
        <ColRow rowNum={rowNum} columnNum={columnNum} size={size} arr={winRow} isCol={false} />
        <Grid
          board={board}
          crosses={crosses}
          handleBoardClick={handleBoardClick}
          handleBoardDrag={handleBoardDrag}
          size={size}
          winBoard={winBoard}
          rowNum={rowNum}
          columnNum={columnNum}
        />
      </div>
    </div>
  );
}
