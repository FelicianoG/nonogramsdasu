import Square from "./Square";
import { useState } from "react";
import arrDenester from "../utils";

export default function Grid({
  winBoard = [
    [false, true, false],
    [false, true, false],
    [true, true, true],
  ],
  size = 400,
  rowNum = 3,
  columnNum = 3,
}) {
  const GRID_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    flexDirection: "column",
    width: `${size}px`,
    height: `${size}px`,
  };

  const ROW_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: `${size / rowNum}px`,
  };
  const initialColumns = [];
  for (let i = 0; i < columnNum; i++) {
    initialColumns.push(false);
  }
  const dimension = [];
  for (let j = 0; j < rowNum; j++) {
    dimension.push([...initialColumns]);
  }

  const [board, setBoard] = useState(dimension);

  function handleRow(row, column) {
    setBoard((prev) => {
      const arr = arrDenester(prev);
      // arr[row][column] = !prev[row][column];
      arr[row][column] = true;
      return arrDenester([...arr]);
    });
  }

  return (
    <>
      {JSON.stringify(board) === JSON.stringify(winBoard) ? (
        <h1>You win!</h1>
      ) : null}
      <div style={GRID_STYLE}>
        {board.map((arr, i) => {
          return (
            <div key={i} style={ROW_STYLE}>
              {arr.map((square, j) => {
                return (
                  <Square
                    gridSize={size}
                    resolution={rowNum}
                    key={`${i}${j}`}
                    row={i}
                    column={j}
                    handleRow={handleRow}
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
