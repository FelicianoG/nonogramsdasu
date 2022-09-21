import Square from "./Square";
import { useState } from "react";

export default function Grid({ rowNum = 4, columnNum = 4 }) {
  const ROW_STYLE = {
    display: "flex",
  };
  const initialColumns = [];
  for (let i = 0; i < columnNum; i++) {
    initialColumns.push(false);
  }
  const dimension = [];
  for (let j = 0; j < rowNum; j++) {
    dimension.push(initialColumns);
  }

  const [board, setBoard] = useState(dimension);

  function handleRow(column, row) {
    setBoard((prev) => {
      return prev;
    });
  }

  return (
    <>
      {board.map((arr, i) => {
        return (
          <div key={i} style={ROW_STYLE}>
            {arr.map((square, j) => {
              console.log(i, j, board[i][j]);
              return (
                <Square
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
    </>
  );
}
