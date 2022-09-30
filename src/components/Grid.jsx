import Square from "./Square";
import { colorTheme } from "../utils";

export default function Grid({
  winBoard,
  size = 200,
  rowNum = 3,
  columnNum = 3,
  board,
  handleBoard,
}) {
  const ROW_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: `${size / rowNum}px`,
  };

  return (
    <>
      <div className="grid">
        {board.map((arr, i) => {
          return (
            <div key={i} className={"grid-row"} style={ROW_STYLE}>
              {arr.map((square, j) => {
                return (
                  <Square
                    gridSize={size}
                    resolution={rowNum}
                    key={`${i}${j}`}
                    row={i}
                    top={i % 5 === 0 && i !== 0}
                    left={j % 5 === 0 && j !== 0}
                    column={j}
                    handleBoard={handleBoard}
                    marked={board[i][j]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
